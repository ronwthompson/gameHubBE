
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', table => {
    table.increments()
    
    table.integer('user_id').notNullable().defaultsTo(0)
    //table.foreign('user_id').references('users.id').onDelete('CASCADE')

    table.integer('service_id').notNullable().defaultsTo(0)
    //table.foreign('service_id').references('services.id').onDelete('CASCADE')

    table.integer('game_id').notNullable().defaultsTo(0)
    //table.foreign('game_id').references('games.id').onDelete('CASCADE')

    // ?? more things ??

    table.integer('wins').defaultsTo(null)
    table.integer('losses').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats')
};
