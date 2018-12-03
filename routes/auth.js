const express =  require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')

router.use('/login', authCtrl.login)

module.exports = router