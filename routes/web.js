const express = require('express')
const router = express.Router()

const FrontController = require('../controllers/FrontController')

// router.get('/',FrontController.home)
router.get('/dashboard',FrontController.dashboard)
router.get('/registration',FrontController.registration)
router.get('/',FrontController.login)
router.get('/ab',FrontController.ab)




module.exports = router
