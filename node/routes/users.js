const express = require('express');
const router = express.Router();
const User = require('../models/users')

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  });

  router.post('/', async (req, res) => {
    const {name,email,password,orderId } = req.body;
    console.log(req.body);
    const user = await User.create({
      name,
      email,
      password,
      orderId
    });
    res.json(user);
  });

  router.put('/:id', async (req, res) => {
    const { name,email,password,orderId } = req.body;
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });

    user.name = name;
    user.email = email;
    user.password = password;
    user.orderId = orderId;

    await user.save();
  
    res.json(user);
  });
  

module.exports = router;
