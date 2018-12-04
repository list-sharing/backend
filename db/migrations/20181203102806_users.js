
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('email').notNullable().defaultsTo('');
      table.text('password').notNullable().defaultsTo('');
      table.string('first_name').notNullable().defaultsTo('');
      table.string('last_name').notNullable().defaultsTo('');
      table.text('img');
      table.text('bio');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
