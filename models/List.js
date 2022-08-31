const {DataTypes} = require('sequelize')
const db = require('../db/db')
const User = require('./User')
const queryInterface = db.getQueryInterface();

const List = db.define('List', {
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    status: {
        type: DataTypes.STRING,
        required: false,
    },
    description: {
        type: DataTypes.STRING,
        required: false,
    }
})

User.hasMany(List)
List.belongsTo(User)

module.exports = List