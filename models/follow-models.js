const knex = require('../db/knex')

function createFollower(userId, newFollower) {
    return knex('followers')
        .where({
            'followers.user_id':userId
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
    .select('users.*')
    .innerJoin('users', 'users.id', 'followers.follower_id')
        .where({
            'followers.user_id':userId
        })
        .then(result => {
            return result
        })
}

function getOneFollower(userId, followerId) {
    return knex('followers')
        .where({
            'followers.user_id':userId,
            'followers.follower_id': followerId
        })
        .then(result => {
            return result
        })
};

function removeFollower(userId, followerId) {
    return knex('followers')
    .where({
        'followers.user_id':userId,
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