const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('heroku_3dd571ae227a4c2', 'b0eeb880bdaa08', '64ff4432', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql'
})

module.exports = sequelize


