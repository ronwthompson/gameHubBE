
exports.seed = function(knex, Promise) {
  // Deletes ALL existing tables
  return knex('users').del()
    .then(() => knex('services').del())
    .then(() => knex('games').del())
    .then(() => knex('requests').del())
    .then(() => knex('stats').del())
    .then(() => knex('user_services').del())
    .then(() => knex('service_games').del())
}
