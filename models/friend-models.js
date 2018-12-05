const knex = require('../db/knex')

function createFriend(newFriend) {
    return knex('friends')
        .where({
            'users.id':'friends.user_id'
        })
        .insert({
            newFriend
        })
        .then(result=> {
            return result
        })
}

function getAllFriends() {
    return knex('friends')
        .where({
            'users.id':'friends.user_id'
        })
        .then(result => {
            return result
        })
}

function getOneFriend(friendId) {
    return knex('friends')
        .where({
            'users.id':'friends.user_id',
            'id': friendId
        })
        .then(result => {
            return result
        })
};

function removeFriend(friendId) {
    return knex('friends')
    .where({
        'id': friendId
    })
    .del()
        .then(result => {
            return result
        })
}

module.exports = {
    createFriend,
    getOneFriend,
    getAllFriends,
    removeFriend
}