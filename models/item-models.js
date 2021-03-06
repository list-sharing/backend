const knex = require('../db/knex')

function createItem(listId, newItem) {
    console.log('hitting createItem in item-models', newItem)
    return knex('items')
        .innerJoin('lists', 'items.list_id', 'lists.id')
        .where({
            'lists.id': listId
        })
        .insert(newItem) //changed - was originally {newItem} object destructuring removed
        .then(result => {
            return result
        })
}

function modifyItem(itemId, newItem) {
    return knex('items')
        .where({
            'id': itemId
        })
        .update({
            "source_url": newItem.source_url,
            "synopsis": newItem.synopsis
        }).returning('*')
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
        .where({
            'id': itemId
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