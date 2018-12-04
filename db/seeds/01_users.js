
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, email: 'mac@fightmilk.com', password: '$2b$10$Sql9BDpLb9NnONKi5tnDOep68BQoXo4NwQAHz9sKK5gBmvgI2KMYa', first_name: 'Ronald', last_name: 'McDonald', img: 'https://cimg.tvgcdn.net/i/2017/02/08/49730ab8-5d72-4289-9e97-fad94ea8d5cd/ec189037760f170762194413cf102a33/170208-news-its-always-sunny.jpg', bio: "Co-owner and the bad-ass bouncer/bodyguard of Paddy's Pub and generally the pub's most active manager."},
    { id: 2, email: 'charlie.kelly@kittenmittens.com', password: '$2b$10$bFwjX91oPTnl7jJ9/uB5nu1bKSf2SaSLXGgp8kHq/6bAzRs47ZiYK', first_name: 'Charlie', last_name: 'Kelly', img: 'https://vignette.wikia.nocookie.net/itsalwayssunny/images/7/78/Charlie_Kelly.jpg/revision/latest/scale-to-width-down/310?cb=20171214035211', bio:'I\'m considered the "wild card" of the group'},
    { id: 3, email: 'freynolds@frankslittlebeauties.com', password: '$2b$10$4lVLQnOK6CCuH4vmFRgAmuxeB2d8fyCWGYU5SAvPfMJtKA.6Y/T4i', first_name: 'Frank', last_name: 'Reynolds', img: 'https://vignette.wikia.nocookie.net/itsalwayssunny/images/7/72/Frank_Reynolds.jpg/revision/latest/scale-to-width-down/310?cb=20171214035424', bio:'I used to be prim and proper, but after I divorced Barbara, I let myself lose all convictions and live with no moral compass or decency.'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
  })
};
