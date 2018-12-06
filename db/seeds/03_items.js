
exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { id: 1, list_id: 1, source_url: 'https://itsalwayssunny.fandom.com/wiki/Ocular_patdown', synopsis:'visual threat assessment'},
    { id: 2, list_id: 1, source_url: 'https://www.youtube.com/watch?v=rve6icdL4O0', synopsis: 'The bar just got slightly more unsafe.' },
    { id: 3, list_id: 2, source_url: 'http://bitterr.com/howtoplay.html', synopsis:'rules for how to play night crawlers'},
    { id: 4, list_id: 2, source_url: 'https://i.ytimg.com/vi/VsiCxwyVXxQ/hqdefault.jpg', synopsis:'chicken plus jeans'},
    { id: 5, list_id: 3, source_url: 'https://youtu.be/coVsuFLzBe8', synopsis:'cool dance routines'},
    { id: 6, list_id: 3, source_url: 'https://www.sofeminine.co.uk/skin-care/how-to-disguise-a-crooked-nose-with-makeup-s1630255.html', synopsis: 'how to hide a broken nose' },
    { id: 7, list_id: 4, source_url: 'https://www.independent.co.uk/news/science/stargazing-for-december-2017-a8081716.html', synopsis: 'Stargazing for December!' },
    { id: 8, list_id: 4, source_url: 'https://www.forbes.com/sites/davidanderson/2018/12/03/the-archaeology-of-outer-space/#5019079a3475', synopsis: 'Outerspace archaeology?' },
    { id: 9, list_id: 4, source_url: 'http://tass.com/science/1034522', synopsis: 'Russian astronauts are going to the ISS on 12/11' },
    { id: 10, list_id: 4, source_url: 'https://www.cnbc.com/2018/11/17/oumuamua-why-humans-should-be-open-minded-about-life-in-outer-space.html', synopsis: 'E.T.' },
    { id: 11, list_id: 5, source_url: 'https://vinepair.com/articles/craft-beer-most-popular-can-release/', synopsis: 'Article by Aaron Goldfarb for vinepair' },
    { id: 12, list_id: 5, source_url: 'https://www.foxnews.com/food-drink/beer-delivery-man-ran-off-with-truck-full-of-beer-police-say', synopsis: 'Hilarious story about delivery man' },
    { id: 13, list_id: 5, source_url: 'https://www.forbes.com/sites/geoffwhitmore/2018/12/06/the-worlds-first-craft-beer-airline-to-launch-in-2019/#8ed39226d23a', synopsis: 'Beers plus planes. What could go wrong?' },
    { id: 14, list_id: 5, source_url: 'https://vinepair.com/articles/best-beers-2018/', synopsis: '50 beers released this year' },
    { id: 15, list_id: 6, source_url: 'https://www.fender.com/articles/how-to/for-those-about-to-rock-10-beginner-faqs', synopsis: 'Step by step instructions' },
    { id: 16, list_id: 6, source_url: 'http://www.tropicalmba.com/learn-to-play-guitar/', synopsis: 'Learn to play guitar in 10 hours' },
    { id: 17, list_id: 6, source_url: 'https://www.ultimate-guitar.com/', synopsis: 'Sick guitar tabs' }
    

  ])
  .then(() => {
    return knex.raw("SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));")
  })
};
