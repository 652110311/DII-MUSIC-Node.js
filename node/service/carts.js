const Cart = require('../models/carts')

async function findCarts(req,res){
    const cart = await Cart.findAll();
    res.send(cart);
}
async function findCart(req,res){
    const cart = await Cart.findOne({
        where: {
          id: req.params.id
        }
      });
      res.json(cart);
}
async function newCart(req,res){
    const {userId,productId,quantity,orderId } = req.body;
    console.log(req.body);
    const cart = await Cart.create({
        userId,productId,quantity,orderId
    });
    res.json(cart);
}
async function editCart(req,res){
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
}
async function deleteCart(req,res){
    await Cart.destroy({
        where: {
          id: req.params.id
        }
      });
      res.sendStatus(204);
}

module.exports = {
    findCart,
    findCarts,
    newCart,
    editCart,
    deleteCart
}
