const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, name, surname, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный логин или пароль"));
    }
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким именем уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      name,
      surname,
      role,
      password: hashPassword,
    });
    // const Admin = await Admin.create({email, role, name, surname, role, password: hashPassword})
    const basket = await Basket.create({ userId: user.id });
    //const jwt = jwt.sign( {id: user.id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
    const token = generateJwt(
      user.id,
      user.email,
      user.role,
      user.name,
      user.surname
    );
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(
      user.id,
      user.email,
      user.role,
      user.name,
      user.surname
    );
    return res.json({
      token,
      data: {
        uid: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        surname: user.surname,
      },
    });
  }

  async check(req, res, next) {
    const token = generateJwt(
      user.id,
      user.email,
      user.role,
      user.name,
      user.surname
    );
    return res.json({ token });
  }
}

module.exports = new UserController();
