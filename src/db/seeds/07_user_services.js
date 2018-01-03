
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_services').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_services').insert([
        {user_id: 1, service_id: 1, users_service_id: 123},
        {user_id: 1, service_id: 2, users_service_id: 123},
        {user_id: 2, service_id: 1, users_service_id: 123},
        {user_id: 2, service_id: 2, users_service_id: 123},
        {user_id: 2, service_id: 3, users_service_id: 123},
        {user_id: 3, service_id: 3, users_service_id: 123}
      ]);
    });
};
