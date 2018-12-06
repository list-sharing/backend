
exports.seed = function(knex, Promise) {
  return knex('followers').insert([
        {id: 1, user_id: 1, follower_id:2},
        {id: 2, user_id: 1, follower_id:3},
        {id: 3, user_id: 2, follower_id:1},
        {id: 4, user_id: 2, follower_id:3},
        {id: 5, user_id: 3, follower_id:1},
        {id: 6, user_id: 3, follower_id:2},
        {id: 7, user_id: 1, follower_id:4},
        {id: 8, user_id: 1, follower_id: 5},
        {id: 9, user_id: 1, follower_id: 6},
        {id: 10, user_id: 2, follower_id: 4},
        {id: 11, user_id: 2, follower_id: 5},
        {id: 12, user_id: 2, follower_id: 6},
        {id: 13, user_id: 3, follower_id: 4},
        {id: 14, user_id: 3, follower_id: 5},
        {id: 15, user_id: 3, follower_id: 6},
        {id: 16, user_id: 4, follower_id: 4},
        {id: 17, user_id: 4, follower_id: 5},
        {id: 18, user_id: 4, follower_id: 6},
        {id: 19, user_id: 5, follower_id: 4},
        {id: 20, user_id: 5, follower_id: 5},
        {id: 21, user_id: 5, follower_id: 6},
        {id: 22, user_id: 6, follower_id: 4},
        {id: 23, user_id: 6, follower_id: 5},
        {id: 24, user_id: 6, follower_id: 6},
        {id: 25, user_id: 7, follower_id: 1}
      ])
      .then(() => {
        return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followers));")
    })
};
