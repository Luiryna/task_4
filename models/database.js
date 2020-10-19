var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'table', // database
  'root', // user 
  'root', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;