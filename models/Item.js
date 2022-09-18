const {DataTypes} = require('sequelize')
const db = require('../db/db')
const List = require('./List')
const queryInterface = db.getQueryInterface();

const Item = db.define('Item',{
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    description: {
        type: DataTypes.STRING,
        required: false,
    },
    status: {
        type: DataTypes.STRING,
        required: true,
    }
})

List.hasMany(Item)
Item.belongsTo(List)

module.exports = Item