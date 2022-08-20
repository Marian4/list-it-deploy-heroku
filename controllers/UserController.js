const User = require('../models/User')

module.exports = class UserController {
    static showDashboard(req, res) {
        res.render('users/dashboard', {layout: 'main'})
    }
    static createNewUserPage(req, res) {
        res.render('users/register', {layout: 'main'})
    }
    static async createNewUser(req, res) {
        const username = req.body.username
        const password = req.body.password
        await User.create({username, password})
        res.redirect('/')
    }

}