const express = require('express')
const router = express.Router() 
const ListController = require('../controllers/ListController')

router.get('/mylists', ListController.showAll)
router.get('/', ListController.teste)

module.exports = router