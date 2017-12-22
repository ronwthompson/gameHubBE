//this is a join table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('service_games', table => {
    table.increments()
    
    table.integer('game_id').notNullable().defaultsTo(0)
    table.foreign('game_id').references('games.id').onDelete('CASCADE')

    table.integer('service_id').notNullable().defaultsTo(0)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('service_games')
};
