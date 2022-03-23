const { Sequelize } = require('sequelize');
const {  db_host, db_name, db_pass, db_user, db_dialect  } = require('./setting')
const conn = new Sequelize(db_name, db_user, db_pass,{
    host: db_host,
    dialect: db_dialect
})

module.exports = conn