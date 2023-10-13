const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define(
    'User',{
        name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        orderId:{
            type: DataTypes.DOUBLE
        },
        
    }
);

module.exports = User;