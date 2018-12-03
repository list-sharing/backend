const express = require('express')
const router = express.Router()
const usersController = require('../controllers/user-controller')

router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersCtrl.signup)
router.put('/users/:id',usersCtrl.editOneUser)

module.exports = router
