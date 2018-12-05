
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_lists', table => {
        table.increments();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.integer('list_id').notNullable();
        table.foreign('list_id').references('lists.id').onDelete('CASCADE');
        table.boolean('is_owner').notNullable().defaultsTo('false');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_lists')
};
