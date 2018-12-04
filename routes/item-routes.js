const express = require('express')

const itemsController = require('../controllers/item-controllers')
const router = express.Router({mergeParams: true})

router.get('/', itemsController.getAllItems)
router.get('/:itemId', itemsController.getOneItem)
router.post('/', itemsController.createItem)
router.put('/:itemId', itemsController.modifyItem)
router.delete('/:itemId', itemsController.removeItem)

module.exports = router