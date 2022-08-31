const express = require('express')
const router = express.Router() 
const ListController = require('../controllers/ListController')

router.get('/dashboard', ListController.showDashboard)
router.get('/create', ListController.create)
router.post('/create', ListController.createPost)

module.exports = router