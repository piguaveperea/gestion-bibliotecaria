const  { db_host, db_name } = require('../setting')
class HomeController {
    getHome(req, res){
        res.render('home', {title:'Biblioteca UTELV T'})
    }
}

module.exports = new HomeController