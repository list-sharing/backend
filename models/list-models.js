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
    return knex('lists')
    .innerJoin('users_lists', 'users_lists.list_id', '=', 'lists.id')
    .where({
        user_id: userId,
        list_id: listId
    })
};

function addList(userId, listId){
    return knex('list')
    .innerJoin('user_lists','users_lists_id','list.id')
    .where({
        
    })
}
module.exports = {getAllLists,getList}
