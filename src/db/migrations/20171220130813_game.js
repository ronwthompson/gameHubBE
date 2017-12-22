
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments()
    
    table.integer('service_id').notNullable().defaultsTo(0)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

    table.string('game_name').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
