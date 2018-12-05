const itemsModel = require('../models/item-models.js')

function createItem(req, res, next) {
  console.log(req.body)
  // const {
  //   id,
  //   sourceURL,
  //   itemSynopsis
  // } = req.body unnecessary deconstructing.

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
  const {
    itemSynopsis
  } = req.body;
  return itemsModel.modifyItem(req.params.listId, req.params.itemId, req.body)
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
  console.log('hitting item-controllers getAllItems')
  return itemsModel.getAllItems(req.params.listId)
    .then((result) => {
      console.log(result)
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
  return itemsModel.removeItem(req.params.listId, req.params.itemId)
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