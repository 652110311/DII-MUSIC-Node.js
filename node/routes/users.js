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
  

module.exports = router;
