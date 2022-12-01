const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('pegwau', 'root', '', {
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize