const authModel = require('models/auth')
const jwt = require('jsonwebtoken')

function login (req, res, next){
    const {email, password} = req.body
    return authModel.login(email, password)
    .then(result => result)
}


module.exports = {login}