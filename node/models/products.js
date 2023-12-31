const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Products = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  quantity: {
    type: DataTypes.DOUBLE,
  },
  type: {
    type: DataTypes.STRING,
  },
  imageURL: {
    type: DataTypes.TEXT,
  },
  sound: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.JSONB,
  },
});

module.exports = Products;
