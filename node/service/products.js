const Product = require("../models/products");

async function findProducts(req, res) {
  const products = await Product.findAll();
  res.json(products);
}
async function findProduct(req, res) {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(product);
}
async function newProduct(req, res) {
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
}
async function editProduct(req, res) {
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
}
async function deleteProduct(req, res) {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(204);
}

module.exports = {
  findProduct,
  findProducts,
  newProduct,
  editProduct,
  deleteProduct,
};
