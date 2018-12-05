const itemsModel = require('../models/item-models.js')

function createItem(req, res, next) {
  return itemsModel.createItem(req.params.listId, req.body)
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

function modifyItem(req, res, next) {
  return itemsModel.modifyItem(req.params.itemId, req.body)
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

function getAllItems(req, res, next) {
  return itemsModel.getAllItems(req.params.listId)
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


function getOneItem(req, res, next) {
  return itemsModel.getOneItem(req.params.listId, req.params.itemId)
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

function removeItem(req, res, next) {
  return itemsModel.removeItem(req.params.itemId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "there was an error"
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
}


module.exports = {
  createItem,
  modifyItem,
  getAllItems,
  getOneItem,
  removeItem
}