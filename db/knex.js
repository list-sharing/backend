'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[environment];
const knex = require('knex')(knexConfig);


exports.up = function(knex, Promise) {
    return knex.schema.createTable('listin_dev', table => {
      table.increments()
      table.string('users').notNullable()
      table.string('lists').notNullable()
      table.string('items').notNullable()
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('listin_dev')
  };

module.exports = knex;
