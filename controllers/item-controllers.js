const itemsModel = require('../models/item-models.js')

function createItem(req, res, next){
    const newList = itemsModel.createItem(req.params.userId, req.params.listId, req.body)
  
    if(newList.error) return next( { status: 400, message: newList })
    
    res.status(201).send({ data: newList })
  }
  
  function modifyItem(req, res, next){
    const newList = itemsModel.modifyItem(req.params.userId, req.params.listId, req.params.itemId, req.body)
  
    if(newList.error) return next( { status: 400, message: newList })
    
    res.status(201).send({ data: newList })
  }
  
  function getAllItems(req, res, next){
    const lists = itemsModel.getAllItems(req.params.userId, req.params.listId)
    
    res.send({data: lists})
  }
  
  
  function getOneItem(req, res, next){
    const list = itemsModel.getOneItem(req.params.userId, req.params.listId, req.params.itemId)
  
    if(!list) return next({status: 404, message: list })
  
    res.status(200).send(list)
  }
  
  function removeItem(req, res, next){
    const list = itemsModel.removeItem(req.params.userId, req.params.listId, req.params.itemId)
  
    if(!list) return next({status: 404, message: list })
  
    res.status(200).send(list)
  }

  module.exports(createItem, modifyItem, getAllItems, getOneItem, removeItem)