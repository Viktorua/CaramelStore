const database = require("../db");
const { DataTypes } = require("sequelize");

const User = database.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, notNull: true },
  password: { type: DataTypes.STRING, notNull: true },
  name: { type: DataTypes.STRING, notNull: true },
  surname: { type: DataTypes.STRING, notNull: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

// const Admin = database.define("Admin", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   email: { type: DataTypes.STRING, unique: true, notNull: true },
//   password: { type: DataTypes.STRING, notNull: true },
//   name: { type: DataTypes.STRING, notNull: true },
//   surname: { type: DataTypes.STRING, notNull: true },
//   role: { type: DataTypes.STRING, defaultValue: "Admin" },
// });

const Clothes = database.define("clothes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.INTEGER },
  type: { type: DataTypes.STRING },
  size: { type: DataTypes.INTEGER },
  style: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
});

const Basket = database.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.INTEGER },
  type: { type: DataTypes.STRING },
  size: { type: DataTypes.INTEGER },
  style: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
});

const BasketClothes = database.define("basket_clothes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.INTEGER },
  type: { type: DataTypes.STRING },
  size: { type: DataTypes.INTEGER },
  style: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
});

// const Payment = database.define("payment", {
//   id: { type: DataTypes.INTEGER, primaryKey: true },
//   name: { type: DataTypes.STRING, notNull: true },
//   surname: { type: DataTypes.STRING, notNull: true },
//   telephone: { type: DataTypes.NUMBER, notNull: true },
//   city: { type: DataTypes.STRING, notNull: true },
//   address: { type: DataTypes.STRING, notNull: true },
// });

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketClothes);
BasketClothes.belongsTo(Basket);

Clothes.hasMany(BasketClothes);
BasketClothes.belongsTo(Clothes);

// User.hasMany(Payment);
// Payment.belongsTo(User);

module.exports = {
  User,
  Basket,
  Clothes,
  BasketClothes,
  // Payment,
};
