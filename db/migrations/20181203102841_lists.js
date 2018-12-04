
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', table => {
      table.increments();
      table.string('list_name').notNullable().defaultsTo('');
      table.boolean('is_owner').notNulable().defaultsTo('false');
      table.text('desc');
      table.text('img');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lists')
};
