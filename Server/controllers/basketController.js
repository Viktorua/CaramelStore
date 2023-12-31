const { Basket, BasketClothes, Clothes } = require("../models/models");
const jwt = require("jsonwebtoken");

class BasketController {
  async getAll(req, res) {
    try {
      const { userId } = req.body;
      const basket = await BasketClothes.findOne({
        where: { basketId: userId },
      });
      const clothes = (await basket).map((value) =>
        Clothes.findOne({ where: { id: value.clotheId } })
      );
      return res.json(clothes);
    } catch (e) {
      return res.json(e.message);
    }
  }

  async deleteItem(req, res) {
    try {
      const { userId, clotheId } = req.body;

      const basket = await Basket.findOne({ where: { userId } });

      await BasketClothes.destroy({
        where: { clotheId: clothes.id, basketId: basket.id },
      });

      return res.json({ message: "Item has been deleted" });
    } catch (e) {
      return res.json(e.message);
    }
  }

  async addItem(req, res) {
    try {
      console.log(req.body);
      const {
        userId,
        clotheId,
        type,
        description,
        size,
        price,
        img,
        style,
        color,
      } = req.body;

      // const basket = await Basket.findOne({ where: { id: userId } });
      // const clothes = await Clothes.findOne({ where: { id: clotheId } });

      await BasketClothes.create({
        clotheId: clotheId,
        basketId: userId,
        type: req.body.type,
        description: req.body.description,
        size: req.body.size,
        price: req.body.price,
        img: req.body.img,
        style: req.body.style,
        color: req.body.color,
      });

      // const basket_clothes = await BasketClothes.findOne({
      //   where: { basketId: userId, id: clotheId },
      // });

      // console.log("sdf", basket_clothes);

      return res.json({});
    } catch (e) {
      return res.json(e.message);
    }
  }

  async payment(req, res) {
    try {
      const { userId, clotheId } = req.body;

      const basket = await Basket.findOne({ where: { userId } });

      await BasketClothes.destroy({
        where: { clotheId: clothes.id, basketId: basket.id },
      });

      return res.json({ message: "Payment is done successfully" });
    } catch (e) {
      return res.json(e.message);
    }
  }
}

module.exports = new BasketController();

// async create(req, res, next) {
//   try {
//     const {
//       name,
//       surname,
//       telephone,
//       city,
//       address,
//     } = req.body;

//     const payment = await payment.create({
//       name,
//       surname,
//       telephone,
//       price,
//       city,
//       address,
//     });

//     return res.json(payment);
//   } catch (e) {
//     next(ApiError.badRequest(e.message));
//   }
// }
