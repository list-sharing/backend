
exports.seed = function(knex, Promise) {
  return knex('lists').insert([
    { id: 1, list_name: 'Body Builders', desc: 'Tips for cultivating mass, techniques for ocular patdowns', img:'https://images.pexels.com/photos/34950/pexels-photo.jpg'},
    { id: 2, list_name: 'To Do', desc: 'Ideas for boiling denim, rules for playing night crawlers', img: 'https://www.w3schools.com/w3css/img_lights.jpg'},
    { id: 3, list_name: 'Pageant Basics', desc: 'Learn how to safely conduct a child pageant', img:'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'},
    { id: 4, list_name: 'Outer Space', desc: 'he relatively empty regions of the universe outside the atmospheres of celestial bodies.', img: 'https://cdna2.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/https://s3.amazonaws.com/zcom-media/sites/a0iE000000L3ea4IAB/media/catalog/product/6/0/60-outerspace-09615.jpg' },
    { id: 5, list_name: 'Beers I want to Try', desc: 'BEEEER!', img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg' },
    { id: 6, list_name: 'Guitar', desc: 'Learning to play the guitar', img: 'https://static1.squarespace.com/static/58dd8ba7bebafb897532ad58/t/5a21a086f9619a40c9b27cd6/1522786421241/Two+guitars'}
  ])

  
  .then(() => {
    return knex.raw("SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));")
  })
};
