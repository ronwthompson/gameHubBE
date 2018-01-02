
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'galvanize', email: 'wes@galv.com', password: 'abc123', isAdmin: true, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'},
        {username: 'steamUser', email: 'pubgguy@gmail.com', password: '12345', isAdmin: false, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'},
        {username: 'xXx420_noscopexXx', email: 'madcuzbad@hotmail.com', password: 'smokesomedays', isAdmin: false, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'}
      ]);
    });
};
