const {DataTypes} = require('sequelize')
const db = require('../db/db')
const List = require('./List')

const Item = db.define('Item',{
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    obs: {
        type: DataTypes.STRING,
        required: false,
    },
    status: {
        type: DataTypes.STRING,
        required: true,
    },
    finished: {
        type: DataTypes.BOOLEAN
    }
})

List.hasMany(Item)
Item.belongsTo(List)

module.exports = Item