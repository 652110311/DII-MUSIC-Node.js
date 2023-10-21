
const Order = require('../models/orders')

async function findOrders(req,res){
    const order = await Order.findAll();
    res.send(order);
}

async function newOrder(req,res){
    const {orderId,userId,total,addressId,transport,tracking,statusUser,statusAddmin} = req.body;
    console.log(req.body);
    const newOrder = await Order.create({
      orderId,
      userId,
      total,
      addressId,
      transport,
      tracking,
      statusUser,
      statusAddmin,
    });
    res.json(newOrder);
}

async function findOrder(req,res){
    const order = await Order.findOne({
        where: {
          id: req.params.id
        }
      });
      res.json(order);
}



  async function findOrderByUser(req,res){
    const { userId, orderId } = req.params;
      const order = await Order.findOne({
        where: {
          userId,
          orderId,
        },
      });
      
      if (order) {
        res.json({ order });
      } else {
        res.status(404).json({ message: 'Order not found.' });
      }
}

async function editOrder(req,res){
    const { orderId,userId,total,addressId,transport,tracking,statusUser,statusAddmin } = req.body;
    const order = await Order.findOne({
      where: {
        id: req.params.id
      }
    });

    order.orderId = orderId;
    order.userId = userId;
    order.total = total;
    order.addressId = addressId;
    order.transport = transport;
    order.tracking = tracking;
    order.statusUser = statusUser;
    order.statusAddmin = statusAddmin;

    await order.save();
  
    res.json(order);
}




module.exports = {
    findOrder,findOrders,newOrder,findOrderByUser,editOrder
};




