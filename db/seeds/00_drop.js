
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_lists').del()
    .then(() => {
      return knex('items').del()
    })
    .then(() => {
      return knex('lists').del()
    })
    .then(() => {
      return knex('users').del()
    })
};
