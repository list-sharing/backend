const itemsModel = require('../models/item-models.js')
const uuid = require('uuid')

function createItem(req, res, next) {
  const {
    itemId,
    sourceURL,
    itemSynopsis
  } = req.body

  return itemsModel.createItem(req.params.userId, req.params.listId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(201).send({
        id: uuid(),
        sourceURL,
        itemSynopsis
      })
    })
    .catch(next)
}

function modifyItem(req, res, next) {
  const {
    itemSynopsis
  } = req.body;
  return itemsModel.modifyItem(req.params.userId, req.params.listId, req.params.itemId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: "error"
        })
      }
      res.status(201).send({
        itemSynopsis
      })
    })
    .catch(next)
}

function getAllItems(req, res, next) {
  return itemsModel.getAllItems(req.params.userId, req.params.listId)
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
  return itemsModel.getOneItem(req.params.userId, req.params.listId, req.params.itemId)
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
  return itemsModel.removeItem(req.params.userId, req.params.listId, req.params.itemId)
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
  createItem,
  modifyItem,
  getAllItems,
  getOneItem,
  removeItem
}