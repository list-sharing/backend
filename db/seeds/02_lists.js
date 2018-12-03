
exports.seed = function(knex, Promise) {
  return knex('lists').insert([
    {id: 1, list_name: 'Body Builders', desc: 'Tips for cultivating mass, techniques for ocular patdowns'},
    {id: 2, list_name: 'To Do', desc:'Ideas for boiling denim, rules for playing night crawlers'},
    {id: 3, list_name: 'Pageant Basics', desc:'Learn how to safely conduct a child pageant'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));")
  })
};
