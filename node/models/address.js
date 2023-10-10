const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Address = sequelize.define(
    'Address',{

        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        },
    });

module.exports = Address;