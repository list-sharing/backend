const friendsModel = require('../models/friend-models.js')

function createFriend(req, res, next) {
  const {
    user_id,
    friend_id
  } = req.body

  return friendsModel.createFriend(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(201).send({
        name
      })
    })
    .catch(next)
}

function getAllFriends(req, res, next) {
  return friendsModel.getAllFriends()
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


function getOneFriend(req, res, next) {
  return friendsModel.getOneFriend(req.params.friendId)
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

function removeFriend(req, res, next) {
  return friendsModel.removeFriend(req.params.friendId)
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
  createFriend,
  getAllFriends,
  getOneFriend,
  removeFriend
}