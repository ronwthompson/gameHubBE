
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'galvanize', email: 'wes@galv.com', password: '$2a$10$TgUeSdj0c5pDtmt4jgJA5.R1UVFeJQ3RJLqmgjD8oysj2NFzJVTo6', isAdmin: true, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'}, //pass is abc123
        {username: 'steamUser', email: 'pubgguy@gmail.com', password: '$2a$10$f6avmjZc.ANrmDAw28lGOOgv3UlATGQBzyNlTAnCJB3Kv/6p40jb2', isAdmin: false, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'}, //pass is 12345
        {username: 'xXx420_noscopexXx', email: 'madcuzbad@hotmail.com', password: '$2a$10$zqWK5p/1UHqvXdfv8s9HFOcPpakcodQ1WWv6Y12IKGqSOodqERwtS', isAdmin: false, account_created_on: '2001-12-23 14:39:53.662522-05', last_login: '2001-12-23 14:39:53.662522-05'} //pass is smokesomedays
      ]);
    });
};
