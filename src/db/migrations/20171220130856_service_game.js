//this is a join table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('service_games', table => {
    table.increments()
    
    table.integer('game_id').notNullable().defaultsTo(0)

    table.integer('service_id').notNullable().defaultsTo(0)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('service_games')
};
