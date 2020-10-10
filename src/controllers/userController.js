const controllers = {}

var sequelize = require('../model/database');
var User = require('../model/user');

sequelize.sync();

controllers.list = async (req, res) => {
    const data = await User.findAll()
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return error;
    })
    res.json({ success: true, data:data });
}

module.exports = controllers;