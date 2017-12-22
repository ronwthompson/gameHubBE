
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    
    table.integer('service_id').notNullable().defaultsTo(0)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

    table.integer('game_id').notNullable().defaultsTo(0)
    table.foreign('game_id').references('games.id').onDelete('CASCADE')

    table.integer('request_id').notNullable().defaultsTo(0)
    table.foreign('request_id').references('requests.id').onDelete('CASCADE')

    table.integer('stats_id').notNullable().defaultsTo(0)
    table.foreign('stats_id').references('stats.id').onDelete('CASCADE')

    table.string('username').notNullable().defaultsTo('')
    table.string('password').notNullable().defaultsTo('')
    table.date('account_created_on').notNullable().defaultsTo('')
    table.time('last_login').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
