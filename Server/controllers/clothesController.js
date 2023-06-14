const path = require("path");
const { Clothes } = require("../models/models");
const ApiError = require("../error/ApiError");
const express = require("express");

class ClothesController {
  async create(req, res, next) {
    try {
      const {
        type,
        description,
        size,
        price,
        style,
        color,
        production,
        textile,
        count,
      } = req.body;
      const { file } = req;

      const clothes = await Clothes.create({
        type,
        description,
        size,
        price,
        img: file.filename,
        style,
        color,
        production,
        textile,
        count,
      });

      return res.json(clothes);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const clothes = await Clothes.findAll();

    return res.json(clothes);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const clothes = await Clothes.findOne({
      where: { id },

      include: [{ model: InputDeviceInfo, as: "info" }],
    });
    return res.json(clothes);
  }

  async getAllByType(req, res) {
    const { type } = req.params;
    const clothes = await Clothes.findAll({
      where: { type },

      include: [{ model: InputDeviceInfo, as: "type" }],
    });
    return res.json(clothes);
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
}

module.exports = new ClothesController();
