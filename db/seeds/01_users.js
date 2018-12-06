
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, email: 'mac@fightmilk.com', password: '$2b$10$Sql9BDpLb9NnONKi5tnDOep68BQoXo4NwQAHz9sKK5gBmvgI2KMYa', 
    first_name: 'Ronald', last_name: 'McDonald', 
    img: 'https://cimg.tvgcdn.net/i/2017/02/08/49730ab8-5d72-4289-9e97-fad94ea8d5cd/ec189037760f170762194413cf102a33/170208-news-its-always-sunny.jpg', 
    bio: "Co-owner and the bad-ass bouncer/bodyguard of Paddy's Pub and generally the pub's most active manager."},
    { id: 2, email: 'charlie.kelly@kittenmittens.com', password: '$2b$10$bFwjX91oPTnl7jJ9/uB5nu1bKSf2SaSLXGgp8kHq/6bAzRs47ZiYK', 
    first_name: 'Charlie', last_name: 'Kelly', 
    img: 'https://vignette.wikia.nocookie.net/itsalwayssunny/images/7/78/Charlie_Kelly.jpg/revision/latest/scale-to-width-down/310?cb=20171214035211', 
    bio:'I\'m considered the "wild card" of the group'},
    { id: 3, email: 'freynolds@frankslittlebeauties.com', password: '$2b$10$4lVLQnOK6CCuH4vmFRgAmuxeB2d8fyCWGYU5SAvPfMJtKA.6Y/T4i', 
    first_name: 'Frank', last_name: 'Reynolds', 
    img: 'https://vignette.wikia.nocookie.net/itsalwayssunny/images/7/72/Frank_Reynolds.jpg/revision/latest/scale-to-width-down/310?cb=20171214035424', 
    bio:'I used to be prim and proper, but after I divorced Barbara, I let myself lose all convictions and live with no moral compass or decency.'},
    { id: 4, email: 'dylanm@gmail.com', password: '$2b$10$SW3hyuhjWvUDZuczKPtTK.FcVTWCc4uXaeiwQ4yYuUxbsYR2QW.vO', 
    first_name:"Dylan", last_name:"Kite",
    img: 'https://avatars1.githubusercontent.com/u/30078434?s=460&v=4',
    bio: "I'm a 3 way intersection of artist, developer, & social worker. A strong foundation in web technologies complements my history serving the community."},
    { id: 5, email: 'tobyp@gmail.com', password: '$2b$10$9571FVrS3A9eevS8Gwc9wepzNDUbz5r2cyzj5w601Jp7eCbmZ6lP2',
    first_name:'Toby', last_name:'Peterson',
    img: 'https://avatars0.githubusercontent.com/u/38550110?s=460&v=4',
    bio: 'I am currently engaged in web development at Galvanize, Inc in Seattle, WA.'},
    { id: 6, email: 'joeyg@gmail.com', password:'$2b$10$M66nKFNbsuFANMK0PnJpR.cgGb/JazNxyHQlrKL7taLI5y2tvw7gq',
    first_name:'Joey', last_name:'Gaitan',
    img: 'https://avatars0.githubusercontent.com/u/34167199?s=460&v=4',
    bio:'Currently a student at Galvanize in Seattle!'},
    { id: 7, email: 'thewiggler@gmail.com', password: '$2b$10$/6XYyO0mh8Qy7kPViRZWY.Fu5Jj6eBeUu5.xjAaLl/5MMawZ9aS4q',
    first_name: 'Monster', last_name:'Hunter',
    img: 'https://media1.tenor.com/images/e0075a49020ec274fb637e539918af89/tenor.gif?itemid=11491605',
    bio: 'Got my homies with that wide range. Gonna hunt the monsters and make the gear. Dodge dodge smack style broskiez.'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
  })
};
