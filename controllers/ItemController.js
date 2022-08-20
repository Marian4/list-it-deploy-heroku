const Item = require('../models/Item')

module.exports = class ItemController {
    static createItem(req, res) {
        res.render('items/create', {layout: 'main'})
    }
}