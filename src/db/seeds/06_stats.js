
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('stats').insert([
        {id: 1, user_id: 0, service_id: 0, game_id: 0},
        {id: 1, user_id: 0, service_id: 0, game_id: 0},
        {id: 1, user_id: 0, service_id: 0, game_id: 0}
      ]);
    });
};
