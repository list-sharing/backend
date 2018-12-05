const express = require('express')
const router = express.Router({mergeParams:true})
const listsCtrl = require('../controllers/list-controllers')


// router.get('/',listsCtrl.getAllLists)
router.get('/',listsCtrl.getAllUserLists)
router.get('/:listId',listsCtrl.getList)
router.delete('/:listId',listsCtrl.deleteList)
router.post('/' ,listsCtrl.addList)
// router.patch('/:listId',listsCtrl.updateList)
router.put('/:listId', listsCtrl.updateList)

// router.post('user/userId/list/listId',listsCtrl.addUserToList)

module.exports = router