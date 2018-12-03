const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/user-controller')

router.post('/signup', usersCtrl.signup)

router.get('/users/:id', usersCtrl.getOneUser)
router.post('/users', usersCtrl.signup)
router.put('/users/:id',usersCtrl.editOneUser)

module.exports = router
