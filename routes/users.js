const express = require('express')
const router = express.Router()
const usersController = require('../controllers/user-controller')

<<<<<<< HEAD
router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersCtrl.signup)
router.put('/users/:id',usersCtrl.editOneUser)
=======
router.post('/signup', usersCtrl.signup)

// router.get('/users/', usersCtrl.)
// router.get('/users/:id' usersCtrl.)
// router.delete('/users/:id', usersCtrl.)
// router.post('/users/:id', usersCtrl.)
// router.post('/users/:id/list', usersCtrl.)
// router.delete('users/:id/list'usersCtrl.)
// router.put('/user/:id',usersCtrl.)
>>>>>>> 82b2fd056f0782e7bab938b1d737757d5461180f

module.exports = router
