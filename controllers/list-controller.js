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
    const listId = req.params.id;
    const {  } = req.body;
};

function deleteList(){

};

function updateList(){

};

module.exports = {
    getAllLists,
    getList,
    addList,
    deleteList,
    updateList
};
