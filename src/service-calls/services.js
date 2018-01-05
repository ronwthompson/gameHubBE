const request = require('request')
const rp = require('request-promise-native')
const _ = require('lodash')

const services = {
    steam: require('./steam')
}

function allUserInfo (req, res, next) {
    let responseObject = {}
    let promiseList = [
        rp(services.steam.getplayersummaries({steamids: req.body.steamid})).json(),
        rp(services.steam.getownedgames({steamid: req.body.steamid, include_played_free_games: req.body.include_played_free_games || 1})).json(),
        rp(services.steam.getfriendlist({steamid: req.body.steamid})).json(),
        rp(services.steam.getrecentlyplayedgames({steamid: req.body.steamid})).json(),
        rp(services.steam.getplayerbans({steamids: req.body.steamid})).json()
    ]
   Promise.all(promiseList)
    .then(response => {
        response.forEach(rs => {
            _.merge(responseObject, rs)
        })
        res.send(responseObject)
    })
}

// async function getSteamFavStats (req, res, next) {
//     let favList = req.body.appids
//     delete req.body.appids
//     let promiseList = favList.map(appid => {
//         req.body.appid = appid
//         services.steam.getUserStatsForGame(req.body)
//     })
// }

async function shapeRequest (req, res, next) {
    let service = req.params.service_name.toLowerCase()
    let command = req.params.request_name.toLowerCase()
    let queryObject = req.body

    await request(services[service][command](queryObject), function (error, response, body) {
        res.send(body)
    })
}

module.exports = {shapeRequest, allUserInfo}