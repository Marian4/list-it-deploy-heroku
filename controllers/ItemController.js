const Item = require('../models/Item')
const List = require('../models/List')
const { validateItem } = require('../helpers/validations')

module.exports = class ItemController {
    static async create(req, res) {
        let list = await List.findOne({where: {id: req.params.listId}})
        list = list.toJSON()
        const status = list.status.split(',').map((statusOption) => {
            return {"name": statusOption}
        })
        res.render('items/create', {layout: 'main', status, list})
    }

    static async createPost (req, res){
        const {name, status, description} = req.body
        console.log(name, status, description)
        const item = {
            name, status, description, ListId: req.params.listId
        }
        const err = validateItem(item)
        if (err){
            req.flash('message', err)
            req.session.save(() => {
                res.redirect(`/item/create/${req.params.listId}`)
            })
            return
        }

        await Item.create(item)
        req.flash('message', 'Um novo item foi adicionado à lista.')
        req.session.save(() => {
            res.redirect(`/list/${req.params.listId}`)
        })

    }
}