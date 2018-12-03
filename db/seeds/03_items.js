
exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { id: 1, list_id: 1, source_url: 'https://itsalwayssunny.fandom.com/wiki/Ocular_patdown', synopsis:'visual threat assessment'},
    { id: 2, list_id: 1, source_url: 'https://www.youtube.com/watch?v=rve6icdL4O0', synopsis: 'The bar just got slightly more unsafe.' },
    { id: 3, list_id: 2, source_url: 'http://bitterr.com/howtoplay.html', synopsis:'rules for how to play night crawlers'},
    { id: 4, list_id: 2, source_url: 'https://i.ytimg.com/vi/VsiCxwyVXxQ/hqdefault.jpg', synopsis:'chicken plus jeans'},
    { id: 5, list_id: 3, source_url: 'https://www.youtube.com/watch?v=coVsuFLzBe8', synopsis:'cool dance routines'},
    { id: 6, list_id: 3, source_url: 'https://www.sofeminine.co.uk/skin-care/how-to-disguise-a-crooked-nose-with-makeup-s1630255.html', synopsis: 'how to hide a broken nose' }
  ])
  .then(() => {
    return knex.raw("SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));")
  })
};
