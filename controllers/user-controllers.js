const userModel = require('../models/users-models')

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

function getOneUser (req,res,next) {
    return userModel.getOneUser(req.params.id)
    .then((result) => {
        if(!result) {
            return next({status: 404, message: user })
        }
    res.status(200).send(result)})
}

function editOneUser (req,res,next) {
    if (!usermodel) return
    const newUser = userModel.editOneUser(req.params.userId, req.body)
    if(newUser.error) return next( { status: 400, message: newUser })
    const {username, password, profileInformation} = req.body;
    res.status(201).send({username, password, profileInformation})
  }

module.exports = {signup, getOneUser, editOneUser}

