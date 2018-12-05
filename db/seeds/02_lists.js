
exports.seed = function(knex, Promise) {
  return knex('lists').insert([
    { id: 1, list_name: 'Body Builders', desc: 'Tips for cultivating mass, techniques for ocular patdowns', img:'https://images.pexels.com/photos/34950/pexels-photo.jpg'},
    { id: 2, list_name: 'To Do', desc: 'Ideas for boiling denim, rules for playing night crawlers', img: 'https://www.w3schools.com/w3css/img_lights.jpg'},
    { id: 3, list_name: 'Pageant Basics', desc: 'Learn how to safely conduct a child pageant', img:'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));")
  })
};
