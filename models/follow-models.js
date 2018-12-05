const knex = require('../db/knex')

function createFollower(newFollower) {
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

function getAllFollowers() {
    return knex('friends')
        .where({
            'users.id':'friends.user_id'
        })
        .then(result => {
            return result
        })
}

function getOneFollower(friendId) {
    return knex('friends')
        .where({
            'users.id':'friends.user_id',
            'id': friendId
        })
        .then(result => {
            return result
        })
};

function removeFollower(friendId) {
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
    createFollower,
    getOneFollower,
    getAllFollowers,
    removeFollower
}