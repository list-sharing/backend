
exports.seed = function(knex, Promise) {
  return knex('followers').insert([
        {id: 1, user_id: 1, follower_id:2},
        {id: 2, user_id: 1, follower_id:3},
        {id: 3, user_id: 2, follower_id:1},
        {id: 4, user_id: 2, follower_id:3},
        {id: 5, user_id: 3, follower_id:1},
        {id: 6, user_id: 3, follower_id:2}
      ])
      .then(() => {
        return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followers));")
    })
};
