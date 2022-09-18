const express = require('express')
const router = express.Router() 
const ListController = require('../controllers/ListController')
const authMiddleware = require('../helpers/authMiddleware')

router.get('/dashboard', authMiddleware, ListController.showDashboard)
router.get('/create', authMiddleware, ListController.create)
router.post('/create', authMiddleware, ListController.createPost)
router.post('/delete/:id', authMiddleware, ListController.delete)
router.get('/:id', authMiddleware, ListController.showList)

module.exports = router