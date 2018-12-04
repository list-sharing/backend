const knex = require('../db/knex');
const uuid = require('uuid/v4')

function getAllLists(userId){
    return knex('lists')
        .innerJoin('users_lists', 'users_lists.list_id', 'lists.id')
        .where({
            user_id: userId
        })

};

function getList(userId, listId){
    console.log(userId, listId);
    
    return knex('lists')
    .innerJoin('users_lists', 'users_lists.list_id', '=', 'lists.id')
    .where({
        user_id: userId,
        list_id: listId
    })
};

function addList(body){
    return knex('lists')
    .insert(body)
    .returning('*')
}

function addUserToList(userId,listId){
    return knex('users_lists')
    .insert({
        user_id: userId,
        list_id: listId
    })
    .returning('*')
}

function deleteList(userId, listId){
    return knex('lists')
    .del()
    .where({
        user_id: userId,
        list_id: listId
    })
    .returning('*')
}
module.exports = {getAllLists,getList, addList,addUserToList, deleteList}
