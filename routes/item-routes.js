const express = require('express')
const itemsController = require('../controllers/item-controllers')
const router = express.Router()

router.get('/:userId/:listId/items', itemsController.getAllItems)
router.get('/:userId/:listId/items/:itemId', itemsController.getOneItem)
router.post('/:userId/:listId/items', itemsController.createItem)
router.put('/:userId/:listId/items/:itemId', itemsController.modifyItem)
router.delete('/:userId/:listId/items/:itemId', itemsController.removeItem)


module.exports = router