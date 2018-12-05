const model = require('../models/list-models');

function getAllLists(req,res,next){
    model.getAllLists()
    .then(function(result){
        if(result.length<1)
        return next({status: 404, message: "list not found"})

        res.status(200).send(result)
    })
    .catch(next)
}

function getAllUserLists(req,res,next){
    
  model.getAllUserLists(req.params.userId)
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
        return next({status: 404, message: "list not found"})

        res.status(200).send(result);
    })
    .catch(next)
};

function addList(req,res,next){
    if(!req.body.list_name) throw {status: 500, message: "missing name"}
    let list
    model.addList(req.body).then(function([result]){
        if(!result)
        return next({status: 500, message: "list not made"})

        list = result
        return model.addUserToList(req.params.userId,result.id)
        
    })
    .then(function(result){
        res.status(201).send(list)
    })
    .catch(next)
}


function deleteList(req,res,next){
    return model.deleteList(req.params.userId, req.params.listId)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => next(err))
}

function updateList(req,res,next){
    const body = req.body
    const userId = req.params.userId
    const listId = req.params.listId
    
    if(!listId)
    return next({status: 404, message:"list not found"})

    model.updateList(userId,listId,body).then(function(result){
        res.status(201).send(result)
    }).catch(next)
}
// function updateList(req,res,next){
//     const id = req.params
// }
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
    getAllUserLists,
    getList,
    addList,
    deleteList,
    updateList
};
