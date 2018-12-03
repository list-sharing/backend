const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/list-controller')

//builds a list
// router.post('/:userId/lists/:id',ctrl.addList)

//gets all list 
router.get('/:userId/lists/',ctrl.getAllLists)
// get a list
router.get('/:userId/lists/:id',ctrl.getList)

//update a list
// router.put('/:userId/lists/:id',ctrl.updateList)

// //delete a list
// router.delete('/:userId/lists/:id',ctrl.deleteList)

module.exports = router