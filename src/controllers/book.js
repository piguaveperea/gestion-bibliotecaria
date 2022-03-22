const { Book } = require('../models')
class bookController {
    async getBook(req, res) {
        const books = await Book.findAll()
        res.render('book/index', {books: books})
    }

    getAddBook(req, res) {
        res.render('book/create')
    }

    async postAddBook(req, res) {
        const {
            title,
            author,
            subtitle,
            description,
            barcode,
            internal_code,
        } = req.body

        await Book.create({
            title: title,
            author: author, 
            subtitle: subtitle, 
            barcode: barcode, 
            description: description, 
            internal_code: internal_code,
            imgUrl:req.file.filename
        })

    }
}

module.exports = new bookController