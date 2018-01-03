const express = require('express')
const router = express.Router()
const passport = require('passport')

const ctrl = require('../controller/users.controller')
const authCtrl = require('../controller/auth.controller')

router.post('/',
  passport.authenticate('steam'),
  function(req, res) {
  }
)

router.get('/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)

router.get('/:id', authCtrl.verifyToken, authCtrl.isUser, ctrl.getSteam)

module.exports = router