const {DataTypes} = require('sequelize')
const db = require('../db/db')
const User = require('./User')

const List = db.define('List', {
    Name: {
        type: DataTypes.STRING,
        required: true,
    }
})

User.hasMany(List)
List.belongsTo(User)

module.exports = List