const model = require('../models/list-models');

function getAllLists(req,res,next){
  model.getAllLists().then(function(result){
      if(!result)
      return next({status: 404, message: "list not found"})

      res.status(200).send(result);
  })  
};

function getList(req,res,next){
    const listId = req.params.id;
    model.getList(listId).then(function(result){
        if(!result||result.length==0)
        next({status: 404, message: "list not found"})

        res.status(200).send(result);
    })
};

function addList(req,res,next){
    //const newList = req.body;
    //const {  } = req.body;
    model.addList(newList).then(function(result){
        if(!result)
        return next({status: 404, message: "list already taken"})
    })

    res.status(201).send(result)
};

function deleteList(req,res,next){
    const listId = req.params.id;
    model.deleteList(listId).then(function(result){
        if(!result||result.length==0)
        next({status: 404, message: "list already deleted"})

        res.status(200).send(result)
    })
};

function updateList(){
    const listId = req.params.id;
    //const reframedList = req.body;
    model.updatedList(listId, reframedList).then(function(result){
        if(!listId)
        return next({status: 404, message: "list already deleted"})

        res.status(201).send(result)
    })
};

module.exports = {
    getAllLists,
    getList,
    addList,
    deleteList,
    updateList
};
