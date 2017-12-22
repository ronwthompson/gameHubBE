
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, service_id: 0, game_id: 0, request_id: 0, stats_id: 0, username: '', password: '', acount_created_on: '', last_login: ''},
        {id: 1, service_id: 0, game_id: 0, request_id: 0, stats_id: 0, username: '', password: '', acount_created_on: '', last_login: ''},
        {id: 1, service_id: 0, game_id: 0, request_id: 0, stats_id: 0, username: '', password: '', acount_created_on: '', last_login: ''}
      ]);
    });
};
