const knex = require('../db/knex');
const uuid = require('uuid/v4')

function getAllLists(){
    return knex('lists')
    .innerJoin('users_lists', 'users_lists.list_id', 'lists.id') 
}

function getAllUserLists(userId){
    return knex('lists')
        .innerJoin('users_lists', 'users_lists.list_id', 'lists.id')
        .where({
            user_id: userId
        })
}

function getList(listId){
    return knex('lists')
    .innerJoin('users_lists', 'users_lists.list_id', '=', 'lists.id')
    .where({
        list_id: listId
    })
}

function addList(body){
    return knex('lists')
    .insert(body)
    .returning('*')
}

function addListToUser(userId,listId){
    return knex('lists')
    .insert({
        user_id: userId,
        list_id: listId
    })
    .returning('*')
}

function deleteList(userId, listId){
    console.log(userId, listId)
    return knex('lists')
    .where({
        // "user.id": userId,
        "id": listId
    })
    .del()
    .returning('*')
}
//add validation for user updating the list
//add owners key validation within this function
function updateList(listId, body){
    return knex('lists')
    .where({
        id: listId
    })
    .update({
        "list_name": body.list_name,
        "desc": body.desc,
        "img": body.img
    })
    .returning('*')
}

module.exports = {getAllLists,getAllUserLists,getList, addList,addListToUser, deleteList, updateList}
