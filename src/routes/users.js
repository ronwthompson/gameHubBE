const express = require('express');
const router = express.Router();

const ctrl = require('../controller/users.controller')
const authCtrl = require('../controller/auth.controller')

router.get('/current', authCtrl.verifyToken, authCtrl.currentUser)
router.get('/search/:username_or_email', authCtrl.verifyToken, ctrl.userSearch)
// only administrators can view list of users. 
// admins and the user themselves can view their own info
router.get('/:id', authCtrl.verifyToken, authCtrl.isUser, ctrl.show) //complete
// no router.post('/') route, because auth.register creates the user
// admins and users can update profile.
router.post('/:id', authCtrl.verifyToken, authCtrl.isUser, ctrl.exists, ctrl.updateSteamId)
// only admins can delete profiles.
//router.delete('/:id', authCtrl.verifyToken, authCtrl.isAdmin, ctrl.exists, ctrl.delete)
router.get('/', authCtrl.verifyToken, authCtrl.isAdmin, ctrl.index) //complete

module.exports = router
