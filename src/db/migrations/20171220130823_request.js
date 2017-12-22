
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', table => {
    table.increments()
    
    table.integer('user_id').notNullable().defaultsTo(0)
    table.foreign('user_id').references('users.id').onDelete('CASCADE')

    table.integer('service_id').notNullable().defaultsTo(0)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

    table.integer('game_id').notNullable().defaultsTo(0)
    table.foreign('game_id').references('games.id').onDelete('CASCADE')

    table.integer('length_of_play').notNullable().defaultsTo(0)
    table.integer('competitiveness').notNullable().defaultsTo(0)
    table.integer('size_of_group').notNullable().defaultsTo(0)
    table.string('emoticon_mood').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests')
};
