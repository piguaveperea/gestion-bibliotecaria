const router = require('express').Router();
const { bookController } = require('../controllers')
const multer = require('multer');
const storage = require('../utils/muter')

router.get('/book', bookController.getBook)
router.get('/book/create',  bookController.getAddBook)

router.post('/book/create', multer({storage:storage }).single('bookImg'), bookController.postAddBook)

module.exports = router