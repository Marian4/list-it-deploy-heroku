const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('mylists', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize

