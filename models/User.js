const Sequelize = require('sequelize');
var sequelize = require('./database');


var User = sequelize.define("users",{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
            },
        email: {
            type: Sequelize.STRING,
            allowNull: false
            },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
            },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
            },
        password: {
            type: Sequelize.STRING,
            allowNull: false
            },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true
            },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true
        }
})


module.exports = User