const { DataTypes } = require('sequelize')
const db = require('../connection')

const AuthModel = db.define('user',{
    ci: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
},{
    tableName: 'user',
    createdAt: false,
    updatedAt: false
})

module.exports = AuthModel