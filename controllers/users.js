const userModel = require('../models/users')

function signup(req, res, next){
    const {email, password} = req.body
    if(!email || !password) return next({status:400, message: 'Incomplete signup'})
    return userModel.signup(email, password)
    .then(([data]) => {
        if(!data) return next({status:500, message: 'Something went wrong'})
        res.status(201).send({message: `Account created for ${data}`})
    })
    .catch(next)
}

module.exports = {signup}

