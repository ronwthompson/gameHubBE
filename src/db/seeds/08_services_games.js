
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_games').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_games').insert([
        {game_id: 1, service_id: 1},
        {game_id: 2, service_id: 1},
        {game_id: 3, service_id: 2},
        {game_id: 4, service_id: 2},
        {game_id: 5, service_id: 1},
        {game_id: 6, service_id: 3},
        {game_id: 2, service_id: 3},
        {game_id: 5, service_id: 3}
    ]);
  });
};
