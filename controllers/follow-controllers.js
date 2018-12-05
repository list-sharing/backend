const followersModel = require('../models/follow-models.js')

function createFollower(req, res, next) {
  const {
    user_id,
    friend_id
  } = req.body

  return followersModel.createFollower(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(201).send({
      user_id,
      friend_id
      })
    })
    .catch(next)
}

function getAllFollowers(req, res, next) {
  return followersModel.getAllFollowers()
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
  return followersModel.getOneFollower(req.params.friendId)
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
  return followersModel.removeFollower(req.params.friendId)
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