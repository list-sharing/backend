const express = require('express')

const followController = require('../controllers/follow-controllers')
const router = express.Router({mergeParams: true})

router.get('/', followController.getAllFollowers)
router.get('/:followerId', followController.getOneFollower)
router.post('/', followController.createFollower)
router.delete('/:followerId', followController.removeFollower)

module.exports = router