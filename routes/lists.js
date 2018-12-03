const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/list-controller')

router.get('/lists/',ctrl.getAllLists)
router.get('/lists/:id',ctrl.getList)
router.delete('/lists/:id',ctrl.deleteList)
router.post('/lists/:id',ctrl.addList)
router.put('/lists/:id',ctrl.updateList)

module.exports = router