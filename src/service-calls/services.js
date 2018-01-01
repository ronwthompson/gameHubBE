const request = require('request')

const services = {
    steam: require('./steam')
}


async function shapeRequest (req, res, next) {
    let service = req.params.service_name.toLowerCase()
    let command = req.params.request_name.toLowerCase()
    let queryObject = req.body

    await request(services[service][command](queryObject), function (error, response, body) {
        res.send(body)
    })
}

module.exports = {shapeRequest}