const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function login(email, password){
    knex('users')
    .where('email', email)
    .then(data => {
        if(!data) throw {status:400, message: `No user registered for ${email}`}
        return bcrypt.compare(password, data.password)
    })
}

module.exports = {login}