
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', table => {
      table.increments();
      table.string('list_name').notNullable().defaultsTo('');
      table.text('desc');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lists')
};
