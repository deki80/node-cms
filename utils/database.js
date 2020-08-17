const Sequelize = require('sequelize')

const sequelize = new Sequelize('webshop', 'root', 'dejan', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
