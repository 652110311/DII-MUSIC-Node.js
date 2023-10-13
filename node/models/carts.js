const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Cart = sequelize.define(
    'Cart',{
        userId:{
            type: DataTypes.DOUBLE
        },
        productId:{
            type: DataTypes.DOUBLE
        },
        quantity:{
            type: DataTypes.DOUBLE     
        },
        orderId:{
            type: DataTypes.DOUBLE     
        }
    });

module.exports = Cart;