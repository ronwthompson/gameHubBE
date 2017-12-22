
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {id: 1, stats_id: 0, service_name: '', api_key: ''},
        {id: 1, stats_id: 0, service_name: '', api_key: ''},
        {id: 1, stats_id: 0, service_name: '', api_key: ''}
      ]);
    });
};
