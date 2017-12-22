
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_game').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_game').insert([
        {id: 1, game_id: 0, service_id: 0},
        {id: 1, game_id: 0, service_id: 0},
        {id: 1, game_id: 0, service_id: 0}
    });
};
