const express = require('express')
const router = express.Router() 
const ItemController = require('../controllers/ItemController')

router.get('/create/:listId', ItemController.create)
router.post('/create/:listId', ItemController.createPost)

module.exports = router