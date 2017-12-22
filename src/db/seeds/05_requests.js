
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {id: 1, user_id: 0, service_id: 0, game_id: 0, length_of_play: 0, competitiveness: 0, size_of_group: 0, emoticon_mood: ''},
        {id: 1, user_id: 0, service_id: 0, game_id: 0, length_of_play: 0, competitiveness: 0, size_of_group: 0, emoticon_mood: ''},
        {id: 1, user_id: 0, service_id: 0, game_id: 0, length_of_play: 0, competitiveness: 0, size_of_group: 0, emoticon_mood: ''}
      ]);
    });
};
