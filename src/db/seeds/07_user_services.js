
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_services').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_services').insert([
        {id: 1, user_id: 0, service_id: 0},
        {id: 1, user_id: 0, service_id: 0},
        {id: 1, user_id: 0, service_id: 0}
      ]);
    });
};
