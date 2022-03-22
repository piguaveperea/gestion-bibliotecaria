const db = require('../connection')
const { DataTypes } = require('sequelize')
const BookModel = db.define('book',{
    title:{
        type: DataTypes.STRING
    },
    author:{
        type: DataTypes.STRING
    },
    internal_code:{
        type: DataTypes.STRING
    },
    public_id: {
        type: DataTypes.STRING
    },
    subtitle:{
        type: DataTypes.STRING
    },
    imgUrl:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    }
},{
    tableName:  'book',
    updatedAt: false,
    createdAt: false
})

module.exports = BookModel