
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'galvanize', password: 'abc123', acount_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'},
        {username: 'steamUser', password: '12345', acount_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'},
        {username: 'xXx420_noscopexXx', password: 'smokeweedsomedays', acount_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'}
      ]);
    });
};
