const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(product);
});

router.post("/", async (req, res) => {
  const { name, price, quantity, type, imageURL, sound, description } =
    req.body;
  const product = await Product.create({
    name,
    price,
    quantity,
    type,
    imageURL,
    sound,
    description,
  });
  res.json(product);
});

router.put("/:id", async (req, res) => {
  const { name, price, quantity, type, imageURL, sound, description } =
    req.body;
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });

  product.name = name;
  product.price = price;
  product.quantity = quantity;
  product.type = type;
  product.imageURL = imageURL;
  product.sound = sound;
  product.description = description;

  await product.save();

  res.json(product);
});

router.delete("/:id", async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(204);
});

module.exports = router;
