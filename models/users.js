const knex = require('../db/knex')
const bcrypt= require('bcrypt')

function signup(email, password){
    return knex('users')
    .where('email', email)
    .then(([data])=>{
        console.log(data)
        if(!!data) throw {status:400, message: 'Email already in use'}
        return bcrypt.hash(password, 10)
    })
    .then(hashedPW => {
        console.log(hashedPW)
        return knex('users')
        .insert({email, password: hashedPW})
    })
}


module.exports = {signup}