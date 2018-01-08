const deLevelArray = (array) => {
    return array.join(',')
}

const flattenQuery = (queryObject) => {
    let queryString = ''
    for (let key in queryObject) {
        queryString += `&${key}=${Array.isArray(queryObject[key]) ? deLevelArray(queryObject[key]) : queryObject[key]}`
    }
    return queryString
}

const getPlayerSummaries = (queryObject) => {
    // * '''steamids''' REQUIRED
    // ** Comma-delimited list (an array works here) of 64 bit Steam IDs to return profile information for.  Up to 100 Steam IDs can be requested.
    return `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=AE44BDEA9EED0E8975B7111F3C13D706&steamids=null
const getFriendList = (queryObject) => {
    // * '''steamid''' REQUIRED
    // ** 64 bit Steam ID to return friend list for.
    return `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API_KEY}&relationship=friend${flattenQuery(queryObject)}`
}

const getPlayerAchievements = (queryObject) => {
    // * '''steamid''' REQUIRED
    // ** 64 bit Steam ID to return friend list for.
    // * '''appid''' REQUIRED?
    // ** The ID for the game you're requesting
    return `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}

const getUserStatsForGame = (queryObject) => {
    // * '''steamid''' REQUIRED
    // ** 64 bit Steam ID to return friend list for.
    // * '''appid''' REQUIRED
    // ** The ID for the game you're requesting
    return `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}

const getOwnedGames = (queryObject) => {
    // *'''steamid''' REQUIRED
    // ** The SteamID of the account.
    // *'''include_played_free_games''' (1 = true)
    // ** By default, free games like Team Fortress 2 are excluded (as technically everyone owns them).  If include_played_free_games is set, they will be returned if the player has played them at some point.  This is the same behavior as the games list on the Steam Community.
    return `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&include_appinfo=1${flattenQuery(queryObject)}`
} 

const getRecentlyPlayedGames = (queryObject) => {
    // *'''steamid''' REQUIRED
    // ** The SteamID of the account.
    // *'''count'''
    // ** Optionally limit to a certain number of games (the number of games a person has played in the last 2 weeks is typically very small)
    return `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}

const getSchemaForGame = (queryObject) => {
    // *'''appid''' REQUIRED
    // ** The AppID of the game you want stats of
    return `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}

const getPlayerBans = (queryObject) => {
    // *'''steamids''' REQUIRED
    // ** Comma-delimited list (or array) of SteamIDs
    return `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.STEAM_API_KEY}${flattenQuery(queryObject)}`
}

module.exports = {
    getplayersummaries: getPlayerSummaries,
    getfriendlist: getFriendList,
    getplayerachievements: getPlayerAchievements,
    getuserstatsforgame: getUserStatsForGame,
    getownedgames: getOwnedGames,
    getrecentlyplayedgames: getRecentlyPlayedGames,
    getschemaforgame: getSchemaForGame,
    getplayerbans: getPlayerBans
}