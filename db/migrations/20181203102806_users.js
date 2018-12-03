
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.text('email').notNullable().defaultsTo('');
      table.text('password').notNullable().defaultsTo('');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
