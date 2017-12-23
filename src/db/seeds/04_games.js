
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {service_id: 1, game_name: 'Counter Strike: Source'},
        {service_id: 1, game_name: "Player Unknown's Battlegrounds"},
        {service_id: 2, game_name: 'Hearthstone'},
        {service_id: 2, game_name: 'Overwatch'},
        {service_id: 3, game_name: 'Rocket League'},
        {service_id: 3, game_name: 'Halo 5'}
      ]);
    });
};
