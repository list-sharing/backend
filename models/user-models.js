const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneUser(id){
    return knex('users')
    .where({id})
}

function signup(email, password, first_name, last_name) {
    return knex('users')
        .where('email', email)
        .then(([data]) => {
            if (!!data) throw {
                status: 400,
                message: 'Email already in use'
            }
            return bcrypt.hash(password, 10)
        })
        .then(hashedPW => {
            return knex('users')
                .insert({
                    email,
                    password: hashedPW,
                    first_name,
                    last_name
                })
                .returning('users.email')
        })
}

function editOneUser(userId) {
    return knex('users')
        .where({
            id: userId
        })
        .then(response => {
            return knex('users')
                .update({
                    username: response.username,
                    password: response.password,
                    profileInformation: response.profileInformation
                })
        })
}
module.exports = {
    signup,
    getOneUser,
    editOneUser
}