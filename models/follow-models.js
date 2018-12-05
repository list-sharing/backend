const knex = require('../db/knex')

function createFollower(newFollower) {
    return knex('followers')
        .where({
            'users.id': 'followers.user_id'
        })
        .insert({
            newFollower
        })
        .then(result => {
            return result
        })
}

function getAllFollowers() {
    return knex('followers')
        .where({
            'users.id': 'followers.user_id'
        })
        .then(result => {
            return result
        })
}

function getOneFollower(followerId) {
    return knex('followers')
        .where({
            'users.id': 'followers.user_id',
            'followers.follower_id': followerId
        })
        .then(result => {
            return result
        })
};

function removeFollower(followerId) {
    return knex('followers')
        .where({
            'users.id': 'followers.user_id',
            'followers.follower_id': followerId
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