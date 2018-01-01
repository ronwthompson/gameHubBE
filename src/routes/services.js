const express = require('express')
const router = express.Router()
const callHandler = require('../service-calls/services')

router.get('/:service_name/:request_name', callHandler.shapeRequest)

module.exports = router