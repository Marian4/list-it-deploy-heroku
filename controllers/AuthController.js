'use strict'

const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = class UserController {
    static createNewUserPage(req, res) {
        res.render('users/register', {layout: 'main'})
    }
    static async createNewUser(req, res) {
        const username = req.body.username
        const password = req.body.password

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const newUser = await User.create({username, password: hashedPassword})
        req.session.userid = newUser.id
        req.flash('message', "Concluímos seu cadastro com sucesso!")
        req.session.save(() => {
            res.redirect('/')
        })
    }

    static async login (req, res){
        res.render('users/login', {layout: 'main'})
    }

    static async loginPost (req, res){
        const user = await User.findOne({where: {username: req.body.username}})
        if(!user){
            req.flash('message', 'Usuário não encontrado.')
            res.redirect('/')
            return
        }

        if(!bcrypt.compareSync(req.body.password, user.password)){
            req.flash('message', 'Senha incorreta.')
            res.redirect('/')
            return
        }

        req.session.userid = user.id
        req.flash('message', `Bem-vindo(a) de volta ${user.username}`)
        req.session.save(() => {
            res.redirect('/list/dashboard')
        })
    }

    static async logout (req, res){
        req.session.destroy()
        res.redirect('/')
    }

}