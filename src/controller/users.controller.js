const Controller = require('./Controller')('users')
const Model = require(`../model/users.model`)
const encryption = require('../encryption')
const jwt = require('jsonwebtoken')

class UsersController extends Controller {
    static create(req, res, next) {
        encryption.promiseHash(req.body.password).then(hashedPass => {
            req.body.password = hashedPass
            super.create(req, res, next)
        })
    }

    static addDefaults(req, res, next) {
        req.body.isAdmin = req.body.isAdmin === undefined ? false : req.body.isAdmin
        next()
    }

    static show(req, res, next) {
        if (res.userType === 'admin') {
            Model.oneAdmin(req.params.id).then(response => {
                res.json({
                    userType: res.userType,
                    users: response
                })
            })
        } else if (res.userType === 'user' || res.userType === 'guest') {
            let allInfo = {}
            Promise.all([Model.oneSafe(req.params.id),Model.oneUsersGames(req.params.id)]).then(response => {
                allInfo.userType = res.userType
                allInfo.users = response[0]
                allInfo.games = response[1]
                res.json(allInfo)
            })
        } else {
            next({ status: 401, message: 'Unidentified userType' })
        }
    }

    static getSteam(req, res, next){
        Model.getOneSteam(req.params.id).then(response =>{
            res.json({
                steamId: response
            })
        })
    }
}

module.exports = UsersController
