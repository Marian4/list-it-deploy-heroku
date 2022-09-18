const express = require('express')
const router = express.Router() 
const ItemController = require('../controllers/ItemController')
const authMiddleware = require('../helpers/authMiddleware')

router.get('/create/:listId', authMiddleware, ItemController.create)
router.post('/create/:listId', authMiddleware, ItemController.createPost)

module.exports = router