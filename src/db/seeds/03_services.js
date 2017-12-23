
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {service_name: 'Steam', api_key: 'abc123'},
        {service_name: 'Blizzard', api_key: 'abc123'},
        {service_name: 'xBox Live', api_key: 'acb123'}
      ]);
    });
};
