
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, service_id: 0, game_name: ''},
        {id: 1, service_id: 0, game_name: ''},
        {id: 1, service_id: 0, game_name: ''}
      ]);
    });
};
