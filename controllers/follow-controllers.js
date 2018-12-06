const followersModel = require('../models/follow-models.js')

function createFollower(req, res, next) {

  return followersModel.createFollower(req.params.userId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(201).send(result)
    })
    .catch(next)
}

function getAllFollowers(req, res, next) {
  return followersModel.getAllFollowers(req.params.userId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
}


function getOneFollower(req, res, next) {
  return followersModel.getOneFollower(req.params.userId, req.params.followerId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
}

function removeFollower(req, res, next) {
  return followersModel.removeFollower(req.params.userId, req.params.followerId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
}


module.exports = {
  createFollower,
  getAllFollowers,
  getOneFollower,
  removeFollower
}