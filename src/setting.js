require('dotenv').config();

module.exports = {
    port : process.env.PORT || 3000,
    db_name : process.env.DB_NAME,
    db_pass : process.env.DB_PASS,
    db_host : process.env.DB_HOST,
    db_user : process.env.DB_USER,
    email : process.env.EMAIL,
    password : process.env.PASSWORD,
    db_dialect: process.env.DB_DIALECT,
    
}