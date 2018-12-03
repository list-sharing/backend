const knex = require('../db/knex')
const bcrypt= require('bcrypt')

function signup(email, password){
    return knex('users')
    .where('email', email)
    .then(([data])=>{
        if(!!data) throw {status:400, message: 'Email already in use'}
        bcrypt.hash(password, 10)
    })
    .then(hashedPW => {
        return knex('users')
        .insert({email,password: hashedPW})
        .returning(users.email)
    })
}


module.exports = {signup}