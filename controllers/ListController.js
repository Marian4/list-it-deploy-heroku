const List = require('../models/List')
const Item = require('../models/Item')
const { validateList } = require('../helpers/validations')

module.exports = class ListController {
    static async showDashboard(req, res) {
        let lists = await List.findAll({where: {UserId: req.session.userid}})
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
        const err = validateList(list)
        if (err){
            req.flash('message', err)
            req.session.save(() => {
                res.redirect('/list/create')
            })
            return
        }
        await List.create(list)
        req.flash('message', 'Lista criada com sucesso!')
        req.session.save(() => {
            res.redirect('/list/dashboard')
        })
    }
    static async delete (req, res){
        const id = req.params.id
        await List.destroy({where: {id}})
        req.flash('message', 'Lista deletada com sucesso')
        req.session.save(() => {
            res.redirect('/list/dashboard')
        })
    }
    static async showList (req, res){
        const id = req.params.id
        let list = await List.findOne({where: {id}})
        let items = await Item.findAll({where: {ListId: list.id}})
        list = list.toJSON()
        list.items = items.map((item) => {
            return item.toJSON()
        })
        res.render('lists/show', {layout: 'main', list})
    }
}