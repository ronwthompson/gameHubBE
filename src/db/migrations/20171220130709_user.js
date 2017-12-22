
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    
    table.integer('service_id').defaultsTo(null)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

    table.integer('game_id').defaultsTo(null)
    table.foreign('game_id').references('games.id').onDelete('CASCADE')

    table.integer('request_id').defaultsTo(null)
    table.foreign('request_id').references('requests.id').onDelete('CASCADE')

    table.integer('stats_id').notNullable().defaultsTo(0)
    table.foreign('stats_id').references('stats.id').onDelete('CASCADE')

    table.string('username').notNullable().defaultsTo('defaultUser')
    table.string('password').notNullable().defaultsTo('abc123')
    table.timestamp('account_created_on').notNullable().defaultTo(knex.fn.now())
    table.time('last_login').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
