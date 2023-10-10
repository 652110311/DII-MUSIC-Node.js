const express = require('express');
const router = express.Router();
const Address = require('../models/address')

router.get('/', async (req, res) => {
    const address = await Address.findAll();
    res.send(address);
});

router.post('/', async (req, res) => {
    const {firstname,lastname,email,mobile,address,city,state,zip,img } = req.body;
    console.log(req.body);
    const newAddress = await Address.create({
        firstname,lastname,email,mobile,address,city,state,zip,img
    });
    res.json(newAddress);
});
  
module.exports = router;


