const { Sequelize } = require('sequelize');

const conn = new Sequelize('gestion_bibliotecaria', 'root', '',{
    host: 'localhost',
    dialect: 'mariadb' || 'mysql'
})

module.exports = conn