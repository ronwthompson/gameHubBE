
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable().defaultsTo('defaultUser')
    table.string('password').notNullable().defaultsTo('abc123')
    table.string('email').notNullable().defaultsTo('abc123@fake.com')
    table.boolean('isAdmin').defaultsTo(false)
    table.timestamp('account_created_on').notNullable().defaultTo(knex.fn.now())
    table.time('last_login').notNullable().defaultsTo('2001-12-23 14:39:53.662522-05')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
