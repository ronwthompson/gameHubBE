//this is a join table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_services', table => {
    table.increments()
    
    table.integer('user_id').notNullable().defaultsTo(0)

    table.integer('service_id').notNullable().defaultsTo(0)

    table.string('users_service_id').defaultsTo(null)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_services')
};
