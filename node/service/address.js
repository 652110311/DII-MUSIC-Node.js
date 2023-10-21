const Address = require("../models/address");

async function findAddresses(req, res) {
  const address = await Address.findAll();
  res.send(address);
}
async function findAddress(req, res) {
  const address = await Address.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(address);
}
async function newAddress(req, res) {
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
}
module.exports = {
    findAddress,
    findAddresses,
    newAddress
};
