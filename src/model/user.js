const Sequelize = require('sequelize');
var sequelize = require('./database');


var User = sequelize.define("user",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    login: {
        type: Sequelize.STRING,
        allowNull: false
      },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
      },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
})


module.exports = User