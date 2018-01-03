const db = require('../db/knex.js')
const Model = require('./Model')('users')

class User extends Model {

    static oneFromEmail(email) {
        return db('users').where({ email }).first()
    }

    static oneFromUsername(username) {
        return db('users').where({ username }).first()
    }

    static index() {
        return db('users').select('id', 'username', 'email', 'isAdmin', 'account_created_on', 'last_login')
    }

    static oneSafe(id) {
        return db('users').select('id', 'username', 'isAdmin', 'account_created_on', 'last_login').where({ id }).first()
    }

    static getOneSteam(id){
        return db('user_services').select('users_service_id').where({ id }).first()
    }

    static updateSteamId(id, body) {
        return db('user_services').where({ id }).update(body).returning('*')
    }

    static oneUsersGames(id){
        return db('stats').select('service_id', 'game_id', 'wins', 'losses').where({ user_id: id })
    }

    static oneAdmin(id) {
        return db('users').select('id', 'username', 'email', 'isAdmin', 'account_created_on', 'last_login').where({ id }).first()
    }
}

module.exports = User