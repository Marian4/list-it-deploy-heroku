const express = require('express')
const router = express.Router() 
const AuthController = require('../controllers/AuthController')
const authMiddleware = require('../helpers/authMiddleware')

router.get('/register', AuthController.createNewUserPage)
router.post('/register', AuthController.createNewUser)
router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.post('/logout', AuthController.logout)

module.exports = router