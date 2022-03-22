const db = require('../connection')
const  { DataTypes } = require('sequelize')
const RolModel = db.define('rol',{
    rol:{
        type: DataTypes.STRING
    }
},{
    tableName: 'rol',
    updatedAt: false,
    createdAt: false
})

module.exports = RolModel