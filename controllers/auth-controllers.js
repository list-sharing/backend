const authModel = require('../models/auth-models')
const jwt = require('jsonwebtoken')

function login (req, res, next){
    const {email, password} = req.body
    if(!email || !password) return next({status: 400, message:'Error with email or password'})
    return authModel.login(email, password)
    .then(result => {
        const payload = {
            exp: (Date.now() / 1000) + 7200,
            sub: result
        }
        const token = jwt.sign(payload, process.env.SECRET)
        res.status(200).send({token})
    })
    .catch(next)
}


module.exports = {login}