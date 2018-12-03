const express = require('express')
const router = express.Router({mergeParams:true})
const listsCtrl = require('../controllers/list-controllers')

router.get('/',listsCtrl.getAllLists)
router.get('/:listId',listsCtrl.getList)
// router.delete('/',listsCtrl.deleteList)
// router.post('/:listId',listsCtrl.addList)
// router.put('/:listId',listsCtrl.updateList)

module.exports = router