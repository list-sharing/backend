const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function signup(email, password) {
    return knex('users')
        .where('email', email)
        .then(([data]) => {
            if (!!data) throw {
                status: 400,
                message: 'Email already in use'
            }
            bcrypt.hash(password, 10)
        })
        .then(hashedPW => {
            return knex('users')
                .insert({
                    email,
                    password: hashedPW
                })
                .returning(users.email)
        })
}

function getOneUser(userId) {
    const user = knex.find(ele => ele.id === userId)

    if (!user) {
        return {
            error: ['user not found']
        }
    }
    return user
}

function editOneUser(userId, newUser) {
    const error = []
    const userIndex = knex.findIndex(ele => ele.id === userId)
    if (userIndex === -1) {
        error.push('Not Found')
    }

    const {
        id,
        username,
        password,
        profileInformation,
    } = newUser

    knex[userIndex].username = username
    knex[userIndex].password = password
    knex[userIndex].profileInformation = profileInformation

    if (!username && !profileInformation) {
        error.push("Please fill in all values")
    }
    if (error.length) return {
        error
    }

    return knex[userIndex]
}

module.exports = {
    signup,
    getOneUser,
    editOneUser
}