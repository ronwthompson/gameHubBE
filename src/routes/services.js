const express = require('express')
const router = express.Router()
const callHandler = require('../service-calls/services')

router.post('/steam/player_info', callHandler.allUserInfo)
router.post('/:service_name/:request_name', callHandler.shapeRequest)

module.exports = router