const express = require('express')
const router = express.Router()
const listsController = require('../controllers/list-controller')

router.get('/lists',listsController.getAllLists)
router.get('/lists/:listId',listsController.getList)
router.delete('/lists',listsController.deleteList)
router.post('/lists/:listId',listsController.addList)
router.put('/lists/:listId',listsController.updateList)

module.exports = router