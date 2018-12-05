const knex = require('../db/knex')

function createFollower(newFollower) {
    return knex('followers')
        .where({
            'users.id': 'followers.user_id'
        })
        .insert(
            newFollower
        )
        .then(result => {
            return result
        })
}

function getAllFollowers(userId) {
    return knex('followers')
    .innerJoin('users', 'users.id', 'followers.user_id')
        .where({
            'followers.user_id':userId
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