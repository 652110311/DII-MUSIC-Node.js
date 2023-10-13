const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Order = sequelize.define(
    'Order',{
        orderId:{
            type: DataTypes.DOUBLE
        },
        userId:{
            type: DataTypes.DOUBLE
        },
        total:{
            type: DataTypes.DOUBLE
        },
        addressId:{
            type: DataTypes.DOUBLE
        },
        transport:{
            type: DataTypes.STRING     
        },
        tracking:{
            type: DataTypes.STRING     
        },
        statusUser:{
            type: DataTypes.STRING     
        },
        statusAddmin:{
            type: DataTypes.STRING     
        },
    });

module.exports = Order;