const express =  require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth-controllers')

router.post('/login', authCtrl.login)
router.get('/token', authCtrl.authenticate, authCtrl.authStatus)

module.exports = router
