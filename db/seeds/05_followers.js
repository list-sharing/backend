
exports.seed = function(knex, Promise) {
  return knex('followers').insert([
        {id: 1, user_id: 1, follower_id:2, follower_id_first: 'Charlie'},
        {id: 2, user_id: 1, follower_id:3, follower_id_first: 'Frank'},
        {id: 3, user_id: 2, follower_id:1, follower_id_first: 'Ronald'},
        {id: 4, user_id: 2, follower_id:3, follower_id_first: 'Frank'},
        {id: 5, user_id: 3, follower_id:1, follower_id_first: 'Ronald'},
        {id: 6, user_id: 3, follower_id:2, follower_id_first: 'Charlie'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followers));")
    })
};
