const userModel = require('../models/user-models')

function signup(req, res, next) {
    const {
        email,
        password
    } = req.body
    if (!email || !password) return next({
        status: 400,
        message: 'Incomplete signup'
    })
    return userModel.signup(email, password)
        .then(([data]) => {
            if (!data) return next({
                status: 500,
                message: 'Something went wrong'
            })
            res.status(201).send({
                message: `Account created for ${data}`
            })
        })
        .catch(next)
}

function getOneUser(req, res, next) {
    return userModel.getOneUser(req.params.id)
        .then((result) => {
            if (!result) {
                return next({
                    status: 404,
                    message: "User not found"
                })
            }
            res.status(200).send(result)
        })
}

function editOneUser(req, res, next) {
    const {
        username,
        password,
        profileInformation
    } = req.body;
    return userModel.editOneUser(req.params.userId, req.body)
        .then((result) => {
            if (!result) {
                return next({
                    status: 404,
                    message: "User not found"
                })
            }
            res.status(201).send({
                username,
                password,
                profileInformation
            })
        })
}
module.exports = {
    signup,
    getOneUser,
    editOneUser
}