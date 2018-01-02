const express = require('express')
const router = express.Router()

const authCtrl  = require('../controller/auth.controller')
const UsersController = require('../controller/users.controller')

router.post('/register', authCtrl.checkExistence, UsersController.create)
router.post('/login', authCtrl.checkLogin, authCtrl.sendToken)

module.exports = router
