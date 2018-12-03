
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {id: 1, email: 'mac@fightmilk.com', password: '$2b$10$Sql9BDpLb9NnONKi5tnDOep68BQoXo4NwQAHz9sKK5gBmvgI2KMYa'},
    {id: 2, email: 'charlie.kelly@kittenmittens.com', password: '$2b$10$bFwjX91oPTnl7jJ9/uB5nu1bKSf2SaSLXGgp8kHq/6bAzRs47ZiYK'},
    {id: 3, email: 'freynolds@frankslittlebeauties.com', password:'$2b$10$4lVLQnOK6CCuH4vmFRgAmuxeB2d8fyCWGYU5SAvPfMJtKA.6Y/T4i'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM snacks));")
  })
};
