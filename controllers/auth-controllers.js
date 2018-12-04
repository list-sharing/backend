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

function authenticate(req, res, next){
    const [, token] = req.headers.authorization.split(' ')
    if(!token) return next({status:401, message: 'Unauthorized'})
    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if(err) return next({status: 401, message: 'Unauthorized'})
        req.claim = payload
        next()
    })
}

function authStatus(req, res, next){
    res.status(200).send({id:req.claim.sub.id})
}

function checkRequest(req, res, next) {
    const id = req.params.id
    if (id !== req.claims.sub.id) return next({ status: 401, message: 'Unauthorized' })
    next()
}   

module.exports = {login, authenticate, authStatus, checkRequest}