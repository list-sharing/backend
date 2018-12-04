const express = require('express')
const router = express.Router({mergeParams:true})
const listsCtrl = require('../controllers/list-controllers')

router.get('/',listsCtrl.getAllLists)
router.get('/:listId',listsCtrl.getList)
router.delete('/:listId',listsCtrl.deleteList)
router.post('/',listsCtrl.addList)
// router.patch('/:listId',listsCtrl.updateList)

module.exports = router