const db = require('../db/knex.js')
const Model = require('./Model')('users')

class User extends Model {

    static oneFromEmail(email) {
        return db('users').whereRaw('LOWER(email) LIKE ?', '%' + email.toLowerCase() + '%').first()
    }

    static oneFromUsername(username) {
        return db('users').whereRaw('LOWER(username) LIKE ?', '%' + username.toLowerCase() + '%').first()
    }

    static index() {
        return db('users').select('id', 'username', 'email', 'isAdmin', 'account_created_on', 'last_login')
    }

    static oneSafe(id) {
        return db('users').select('id', 'username', 'isAdmin', 'account_created_on', 'last_login').where({ id }).first()
    }

    static getOneSteam(user_id){
        return db('user_services').select('users_service_id').where({ user_id }).first()
    }

    static updateSteamId(user_id, users_service_id) {
        return db('user_services').insert({user_id, users_service_id, service_id: 1})
    }

    static oneUsersGames(id){
        return db('stats').select('service_id', 'game_id', 'wins', 'losses').where({ user_id: id })
    }

    static oneAdmin(id) {
        return db('users').select('id', 'username', 'email', 'isAdmin', 'account_created_on', 'last_login').where({ id }).first()
    }
}

module.exports = User