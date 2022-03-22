const db = require('../connection')
const { DataTypes } = require('sequelize')
const UserModel = db.define('user',{
    ci:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    surname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    imgUrl:{
        type: DataTypes.STRING
    },
    rol_id:{
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'user',
    createdAt: false,
    updatedAt: false
})
module.exports = UserModel