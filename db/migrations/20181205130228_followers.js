
exports.up = function(knex, Promise) {
    return knex.schema.createTable('followers', table => {
        table.increments();
        table.integer("user_id").notNullable()
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.integer("follower_id").notNullable()
        table.foreign("follower_id").references('users.id').onDelete('CASCADE')
        table.string('follower_id_first').notNullable().defaultsTo('');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('followers')
};
