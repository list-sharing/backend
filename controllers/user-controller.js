const userModel = require('../models/users')

function signup(res, res, next){
    const {email, password} = req.body
    if(!email || !password) return next({status:400, message: 'Incomplete signup'})
    return userModel.signup(email, password)
    .then(([data]) => {
        if(!data) return next({status:500, message: 'Something went wrong'})
        res.status(201).send({message: `Account created for ${data}`})
    })
    .catch(next)
}

function getOneUser (req,res,next) {
    const user = userModel.getOneUser(req.params.userId)
    if(!user) return next({status: 404, message: user })
    res.status(200).send(user)
}

function editOneUser (req,res,next) {
    const newUser = userModel.modifyUser(req.params.userId, req.body)
    if(newUser.error) return next( { status: 400, message: newUser })
    res.status(201).send({ data: newUser })
  }

module.exports = {signup, getOneUser, editOneUser}

