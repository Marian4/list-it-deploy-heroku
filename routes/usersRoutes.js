const express = require('express')
const router = express.Router() 
const UserController = require('../controllers/UserController')
router.use(express.urlencoded({
	extended: true,
}))
router.use(express.json())

router.get('/dashboard', UserController.showDashboard)
router.get('/register', UserController.createNewUserPage)
router.post('/register', UserController.createNewUser)

module.exports = router