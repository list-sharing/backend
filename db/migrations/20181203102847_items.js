
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
      table.increments();
      table.integer('list_id').notNullable();
      table.foreign('list_id').references('lists.id').onDelete('CASCADE')
      table.text('source_url').notNullable().defaultsTo('');
      table.text('synopsis');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
