const express = require("express");
const router = express.Router();
const Address = require("../models/address");

router.get("/", async (req, res) => {
  const address = await Address.findAll();
  res.send(address);
});

router.post("/", async (req, res) => {
  const { firstname, lastname, email, mobile, address, city, state, zip, img } =
    req.body;
  try {
    const newAddress = await Address.create({
      firstname,
      lastname,
      email,
      mobile,
      address,
      city,
      state,
      zip,
      img,
    });
    console.log("success");
    res.json(newAddress);
  } catch (error) {
    console.log("error");
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  const address = await Address.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(address);
});

module.exports = router;
