
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {user_id: 1, service_id: 2, game_id: 4, length_of_play: 60, competitiveness: 2, size_of_group: 2, emoticon_mood: 'poop'},
        {user_id: 1, service_id: 2, game_id: 4, length_of_play: 120, competitiveness: 5, size_of_group: 4, emoticon_mood: 'happy'},
        {user_id: 2, service_id: 1, game_id: 1, length_of_play: 60, competitiveness: 3, size_of_group: 4, emoticon_mood: 'angry'}
      ]);
    });
};
