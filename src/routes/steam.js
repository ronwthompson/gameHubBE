const express = require('express')
const router = express.Router()
const passport = require('passport')

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

module.exports = router