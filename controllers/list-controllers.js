const model = require('../models/list-models');

function getAllLists(req,res,next){
    console.log('hitting get all lists')
  model.getAllLists(req.params.userId)
  .then(function(result){
      if(result.length < 1)
      return next({status: 404, message: "list not found"})
      res.status(200).send(result);
  })  
  .catch(next)
};

function getList(req,res,next){
    model.getList(req.params.userId, req.params.listId).then(function(result){
        if(!result||result.length==0)
        next({status: 404, message: "list not found"})

        res.status(200).send(result);
    })
    .catch(next)
};


// function deleteList(req,res,next){
//     const listId = req.params.id;
//     model.deleteList(listId).then(function(result){
//         if(!result||result.length==0)
//         next({status: 404, message: "list already deleted"})

//         res.status(200).send(result)
//     })
// };

// function updateList(){
//     const listId = req.params.id;
//     //const reframedList = req.body;
//     model.updatedList(listId, reframedList).then(function(result){
//         if(!listId)
//         return next({status: 404, message: "list already deleted"})

//         res.status(201).send(result)
//     })
// };

module.exports = {
    getAllLists,
    getList
    // addList,
    // deleteList,
    // updateList
};
