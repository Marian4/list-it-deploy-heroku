const List = require('../models/List')

module.exports = class ListController {
    static showAll(req, res) {
        res.render('lists/main', {layout: 'main'})
    }
    static teste(req, res) {
        res.send('teste deu certo')
    }
}