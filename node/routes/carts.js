const express = require('express');
const router = express.Router();
const Cart = require('../models/carts')

router.get('/', async (req, res) => {
    const cart = await Cart.findAll();
    res.send(cart);
});

router.post('/', async (req, res) => {
    const {userId,productId,quantity,orderId } = req.body;
    console.log(req.body);
    const cart = await Cart.create({
        userId,productId,quantity,orderId
    });
    res.json(cart);
});

router.get('/:id', async (req, res) => {
  const cart = await Cart.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(cart);
});



router.put('/:id', async (req, res) => {
    const { userId,productId,quantity,orderId } = req.body;
    const cart = await Cart.findOne({
      where: {
        id: req.params.id
      }
    });

    cart.userId = userId;
    cart.productId = productId;
    cart.quantity = quantity;
    cart.orderId = orderId;

    await cart.save();
  
    res.json(cart);
  });
  
  router.delete('/:id', async (req, res) => {
    await Cart.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(204);
  });
  
module.exports = router;
