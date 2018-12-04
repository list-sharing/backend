const knex = require('../db/knex')
const uuid = require('uuid')

function createItem(userId, listId, newItem) {
    return knex('items')
        .innerJoin('users_lists', 'users_lists.list_id', 'item.list_id')
        .where({
            user_id: userId,
            id: listId
        })
        .insert({
            newItem
        })
        .then(() => {
            return knex('items')
        })
}

function modifyItem(userId, listId, itemId, newItem) {
    return knex('items')
        .innerJoin('users_lists', 'users_lists.list_id', 'item.list_id')
        .where({
            user_id: userId,
            list_id: listId,
            id: itemId
        })
        .update({
            newItem
        })
        .then(() => {
            return knex('items')
        })
}

function getAllItems(userId, listId) {

    return knex('items')
        .where({
            user_id:userId,
            list_id:listId
        })
}


function getOneItem(userId, listId, itemId) {
    return knex('lists')
        .innerJoin('users_lists', 'users_lists.list_id', 'item.list_id')
        .where({
            user_id: userId,
            list_id: listId,
            id: itemId
        })
};

function removeItem(userId, listId, itemId) {
    return knex('lists')
        .innerJoin('users_lists', 'users_lists.list_id', 'item.list_id')
        .where({
            user_id: userId,
            list_id: listId,
            id: itemId
        })
        .del()
        .then(() => {
            return knex('items')
        })
}

module.exports = {
    createItem,
    modifyItem,
    getOneItem,
    getAllItems,
    removeItem
}