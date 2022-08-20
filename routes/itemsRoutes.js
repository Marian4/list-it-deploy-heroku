const express = require('express')
const router = express.Router() 
const ItemController = require('../controllers/ItemController')

router.get('/create', ItemController.createItem)

module.exports = router