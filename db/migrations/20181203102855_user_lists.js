
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_lists', table => {
        table.increments();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id');
        table.integer('list_id').notNullable();
        table.foreign('list_id').references('lists.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_lists')
};
