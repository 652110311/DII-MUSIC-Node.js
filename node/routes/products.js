const express = require('express');
const router = express.Router();
const Product = require('../models/products')

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.send(products);
});

router.post('/', async (req, res) => {
    const { name, price, quantity,type,imageURL,sound,description } = req.body;
    const product = await Product.create({
        name,
        price,
        quantity,
        type,
        imageURL,
        sound,
        description
    });
    res.json(product);
  });

module.exports = router;
