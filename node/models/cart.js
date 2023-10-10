const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Cart = sequelize.define(
    'Cart',{
        productId:{
            type: DataTypes.STRING
        },
        quantity:{
            type: DataTypes.DOUBLE     
        },
        price:{
            type: DataTypes.DOUBLE      
        }
    });

module.exports = Cart;