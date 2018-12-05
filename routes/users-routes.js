const express = require('express')
const router = express.Router( {mergeParams: true})
const usersCtrl = require('../controllers/user-controllers')
// const itemCtrl = require('../controllers/item-controllers')

router.post('/signup', usersCtrl.signup)

router.get('/:id', usersCtrl.getOneUser)
router.post('/', usersCtrl.signup)
router.put('/:id',usersCtrl.editOneUser)

router.use('/:userId/lists', require('./lists-routes'))


module.exports = router