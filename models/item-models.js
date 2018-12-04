const knex = require('../db/knex')

function createItem(listId, newItem) {
    return knex('items')
        .select('*')
        .innerJoin('lists', 'items.list_id', 'lists.id')
        .where({
            'lists.id': listId
        })
        .insert({
            newItem
        })
        .then(result=> {
            return result
        })
}

function modifyItem(listId, itemId, newItem) {
    return knex('items')
        .select('items.id as items_id', 'lists.id as lists_id', 'items.source_url', 'items.synopsis')
        .innerJoin('lists', 'items.list_id', 'lists.id')
        .where({
            'lists.id': listId,
            'items.id': itemId
        })
        .update({
            newItem
        })
        .then(result => {
            return result
        })
}

function getAllItems(listId) {
    return knex('items')
        .select('items.id as items_id', 'lists.id as lists_id', 'items.source_url', 'items.synopsis')
        .innerJoin('lists', 'items.list_id', 'lists.id')
        .where({
            'lists.id': listId
        })
        .then(result => {
            return result
        })
}

function getOneItem(listId, itemId) {
    return knex('items')
        .select('items.id as items_id', 'lists.id as lists_id', 'items.source_url', 'items.synopsis')
        .innerJoin('lists', 'items.list_id', 'lists.id')
        .where({
            'lists.id': listId,
            'items.id': itemId
        })
        .then(result => {
            return result
        })
};

function removeItem(itemId) {
    return knex('items')
    .select('*')
    .where({
        'id': 3
    })
    .del()
        .then(result => {
            return result
        })
}

module.exports = {
    createItem,
    modifyItem,
    getOneItem,
    getAllItems,
    removeItem
}