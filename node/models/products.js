const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define(
    'Product',{
        name:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.DOUBLE
        },
        quantity:{
            type: DataTypes.DOUBLE
        },
        type:{
            type: DataTypes.STRING
        },
        imageURL:{
            type: DataTypes.STRING
        },
        sound:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.JSONB
        },
        
    }
);

module.exports = Product;