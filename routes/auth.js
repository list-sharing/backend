const express =  require('express')
const router = express.Router()
const authCtrl = require('../controlers/auth')

router.use('/login', authCtrl.login)

module.exports = router