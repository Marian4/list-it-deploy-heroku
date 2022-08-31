const List = require('../models/List')

module.exports = class ListController {
    static async showDashboard(req, res) {
        let lists = await List.findAll()
        lists = lists.map((list) => {
            list = list.toJSON()
            return list
        })
        res.render('lists/dashboard', {layout: 'main', lists})
    }
    static create (req, res){
        res.render('lists/create', {layout: 'main'})
    }
    static async createPost (req, res){
        const {name, status, description} = req.body
        const list = {name, status, description, UserId: req.session.userid}
        console.log("list", list)
        await List.create(list)
        req.flash('message', 'Lista criada com sucesso!')
        req.session.save(() => {
            res.redirect('/list/dashboard')
        })
    }
}