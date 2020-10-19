// const { Schema, model } = require('mongoose')

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     firstName: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     lastName: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     created: {
//         type: Date,
//         default: Date.now
//     },
//     lastLogin: Date,
//     status: String
// })

// module.exports = model('User', userSchema)

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