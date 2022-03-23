const { Op } = require('sequelize')
const { Auth, User, Rol } = require('../models')
const bcryptjs = require('bcryptjs')
const { Email } = require('../utils')
class AuthController {
    getSingIn(req,res){
        res.render('auth/index',{title:'Iniciar Sesión'})
    }
    async postSignIn(req, res){
        const {
            username,
            password
        } = req.body
        
        const user = await Auth.findOne({
            where: {
                [Op.or]:[
                    {ci: username},
                    {email: username}
                ]
            }
        })

        if(user){
            if(bcryptjs.compareSync(password, user.password)){
                res.redirect('/')
            }
            else{
                res.json('no password')
            }
        }
        else{
            res.json('No usuario')
        }
    }
    getRecoveryPass(req, res){
        res.render('auth/recoverypass',{title: 'Recuperar Cuenta'})
    }
    postRecoveryPass(req, res){
        const {
            username
        } = req.body
        
    }
    getRegister(req, res){
        res.render('auth/register',{title: 'Crear cuenta'})
    }
    async postRegister(req, res){
        const { 
            ci,
            name,
            surname,
            email,
            password,
        } = req.body
        const rol = await Rol.findOne({where: {rol: 'invitado'}})
        try{
            await User.create({ci:ci, name:name, surname:surname, email:email, password:bcryptjs.hashSync(password,10), rol_id:rol.id})
            Email.Register(name,surname,ci,email,password)
            res.redirect('/signin')
        }
        catch {
            res.redirect('/register')
        }
              
    }
}

module.exports = new AuthController