const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Summary = sequelize.define("Summary", {
  totalProducts: {
    type: DataTypes.DOUBLE,
  },
  totalOrders: {
    type: DataTypes.DOUBLE,
  },
  totalCustomers: {
    type: DataTypes.DOUBLE,
  },
  totalSales: {
    type: DataTypes.DOUBLE,
  },
});

module.exports = Summary;
