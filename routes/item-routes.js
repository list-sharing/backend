const express = require('express')
const itemsController = require('../controllers/item-controllers')
const router = express.Router()

router.get('/:userId/list/:listId/items', itemsController.getAllItems)
router.get('/:userId/list/:listId/items/:itemId', itemsController.getOneItem)
router.post('/:userId/list/:listId/items', itemsController.createItem)
router.put('/:userId/list/:listId/items/:itemId', itemsController.modifyItem)
router.delete('/:userId/list/:listId/items/:itemId', itemsController.removeItem)


module.exports = router