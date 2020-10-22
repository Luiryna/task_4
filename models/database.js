var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'heroku_e4aecfa06d2fc6a', // database
  'b15bab2adad25d', // user 
  '280fe5e2', //password
  {
    host: 'us-cdbr-east-02.cleardb.com',
    dialect: 'mysql'
  }
);

module.exports = sequelize;