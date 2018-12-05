
exports.up = function(knex, Promise) {
    return knex.schema.createTable('followers', table => {
        table.increments();
        table.integer("user_id").notNullable()
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.integer("friend_id").notNullable()
        table.foreign("friend-id").references('users.id').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('followers')
};
