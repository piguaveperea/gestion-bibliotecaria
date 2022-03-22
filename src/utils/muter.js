const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;

const storage =  multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/img'))
    },
    filename: (req, file, cb)=>{
        cb(null, uuid()+path.extname(file.originalname))
    }
})

module.exports = storage