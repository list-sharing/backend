
exports.seed = function(knex, Promise) {
  return knex('users_lists').insert([
    {id: 1, user_id:1, list_id: 1},
    { id: 2, user_id: 2, list_id: 2 },
    { id: 3, user_id: 3, list_id: 3 }
  ])
  .then(() => {
    return knex.raw("SELECT setval('users_lists_id_seq', (SELECT MAX(id) FROM users_lists));")
  })
};

