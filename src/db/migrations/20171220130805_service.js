
exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', table => {
    table.increments()

    table.integer('stats_id').notNullable().defaultsTo(0)
    table.foreign('stats_id').references('stats.id').onDelete('CASCADE')

    table.string('service_name').notNullable().defaultsTo('')
    table.string('api_key').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services')
};
