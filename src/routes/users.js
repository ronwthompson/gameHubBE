const express = require('express');
const router = express.Router();

const ctrl = require('../controller/users.controller')
const authCtrl = require('../controller/auth.controller')

// only administrators can view list of users. 
router.get('/', authCtrl.verifyToken, authCtrl.isAdmin, ctrl.index)
// admins and the user themselves can view their own info
router.get('/:id', authCtrl.verifyToken, authCtrl.isUser, ctrl.show)
// no router.post('/') route, because auth.register creates the user
// admins and users can update profile.
router.patch('/:id', authCtrl.verifyToken, authCtrl.isUser, ctrl.exists, ctrl.update)
// only admins can delete profiles.
router.delete('/:id', authCtrl.verifyToken, authCtrl.isAdmin, ctrl.exists, ctrl.delete)

module.exports = router
