const knex = require('../db/knex');
const uuid = require('uuid/v4')

// function addList(userId, listId,newList){
//    return knex('lists')
//         .then(function(result){

//         })

// }

function getAllLists(){
    return knex('lists')
};

function getList(){
    return knex('lists')
    .where('id','listId')
};

module.exports = {getAllLists,getList}
