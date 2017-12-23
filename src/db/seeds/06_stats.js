
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('stats').insert([
        {user_id: 1, service_id: 1, game_id: 1, wins: 22, losses: 1},
        {user_id: 1, service_id: 1, game_id: 2, wins: 1, losses: 99},
        {user_id: 2, service_id: 2, game_id: 3, wins: 15, losses: 15},
        {user_id: 2, service_id: 2, game_id: 4, wins: 8, losses: 22},
        {user_id: 3, service_id: 3, game_id: 5, wins: 12, losses: 26}
      ]);
    });
};
