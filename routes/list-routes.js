const express = require('express')
const router = express.Router({mergeParams:true})
const listsCtrl = require('../controllers/list-controllers')
const authCtrl = require('../controllers/auth-controllers')

// router.get('/',listsCtrl.getAllLists)

router.get('/',listsCtrl.getAllUserLists)
router.get('/:listId',listsCtrl.getList)
router.delete('/:listId',listsCtrl.deleteList)
router.post('/' ,listsCtrl.addList)

router.put('/:listId', authCtrl.authenticate, authCtrl.checkRequest, listsCtrl.updateList)

router.post('/:listId/copy',listsCtrl.addListToUser)

module.exports = router