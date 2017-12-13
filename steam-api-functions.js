// === JSON ===
// * The API returns an object containing the named object with the result data.
// * Arrays are represented as an array with the name of the type of the objects in the array(ie.an object named "items" containing an array of objects of type "item" would be represented as an object named "items" containing an array named "item" containing several objects following the "item" structure).
// * Null is represented as JSON's null.
//     === XML ===
// * XML Attributes are not used.
// * Arrays are represented as a series of sub - elements in the containing element of the type of the array.
// * Null is represented by the word "null" between the element's tags.

// If no format is specified, the API will default to JSON.

// == Interfaces and method ==

//     All interfaces and method are self - documented through the ISteamWebAPIUtil / GetSupportedAPIList call.This can be found[http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/ here].

// When passed a key = <your API key> parameter, GetSupportedAPIList will show all APIs that your key can access. Without it (as above), it only displays APIs that do not require an API key.

// === Game interfaces and methods ===

// === GetPlayerSummaries (v0002) ===

// Example URL: http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530
// (This will show Robin Walker's profile information.)

// Returns basic profile information for a list of 64-bit Steam IDs.

// ==== Arguments ====

// * '''steamids'''
// ** Comma-delimited list of 64 bit Steam IDs to return profile information for.  Up to 100 Steam IDs can be requested.
// *'''format'''
// ** Output format. ''json'' (default), ''xml'' or ''vdf''.1

// ==== Return Value ====

// Some data associated with a Steam account may be hidden if the user has their profile visibility set to "Friends Only" or "Private".  In that case, only public data will be returned.

// ===== Public Data =====

// *'''steamid'''
// ** 64bit SteamID of the user
// *'''personaname'''
// ** The player's persona name (display name)
// *'''profileurl'''
// ** The full URL of the player's Steam Community profile.
// *'''avatar'''
// ** The full URL of the player's 32x32px avatar.  If the user hasn't configured an avatar, this will be the default ? avatar.
// *'''avatarmedium'''
// ** The full URL of the player's 64x64px avatar.  If the user hasn't configured an avatar, this will be the default ? avatar.
// *'''avatarfull'''
// ** The full URL of the player's 184x184px avatar.  If the user hasn't configured an avatar, this will be the default ? avatar.
// *'''personastate'''
// ** The user's current status.  0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play.  If the player's profile is private, this will always be "0", except if the user has set their status to looking to trade or looking to play, because a bug makes those status appear even if the profile is private.
// *'''communityvisibilitystate'''
// ** This represents whether the profile is visible or not, and if it is visible, why you are allowed to see it.  Note that because this WebAPI does not use authentication, there are only two possible values returned: 1 - the profile is not visible to you (Private, Friends Only, etc), 3 - the profile is "Public", and the data is visible.  Mike Blaszczak's [http://forums.steampowered.com/forums/showpost.php?p=31955251&postcount=3 post on Steam forums] says, "The community visibility state this API returns is different than the privacy state. It's the effective visibility state from the account making the request to the account being viewed given the requesting account's relationship to the viewed account."
// *'''profilestate'''
// ** If set, indicates the user has a community profile configured (will be set to '1')
// *'''lastlogoff'''
// ** The last time the user was online, in unix time.
// *'''commentpermission'''
// ** If set, indicates the profile allows public comments.

// ===== Private Data =====

// *'''realname'''
// ** The player's "Real Name", if they have set it.
// *'''primaryclanid'''
// ** The player's primary group, as configured in their Steam Community profile.
// *'''timecreated'''
// ** The time the player's account was created.
// *'''gameid'''
// ** If the user is currently in-game, this value will be returned and set to the gameid of that game.
// *'''gameserverip'''
// ** The ip and port of the game server the user is currently playing on, if they are playing on-line in a game using Steam matchmaking.  Otherwise will be set to "0.0.0.0:0".
// *'''gameextrainfo'''
// ** If the user is currently in-game, this will be the name of the game they are playing.  This may be the name of a non-Steam game shortcut.
// *'''cityid'''
// ** This value will be removed in a future update (see loccityid)
// *'''loccountrycode'''
// ** If set on the user's Steam Community profile, The user's country of residence, 2-character ISO country code
// *'''locstatecode'''
// ** If set on the user's Steam Community profile, The user's state of residence
// *'''loccityid'''
// ** An internal code indicating the user's city of residence.  A future update will provide this data in a more useful way.
// ** [https://github.com/Holek/steam-friends-countries <tt>steam_location</tt>] gem/package makes player location data readable for output.

// === GetFriendList (v0001) ===

// Returns the friend list of any Steam user, provided their Steam Community profile visibility is set to "Public".

// Example URL: http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamid=76561197960435530&relationship=friend

// ==== Arguments ====

// * '''steamid'''
// ** 64 bit Steam ID to return friend list for.
// * '''relationship'''
// ** Relationship filter. Possibles values: ''all'', ''friend''.
// *'''format'''
// ** Output format. ''json'' (default), ''xml'' or ''vdf''.

// ==== Result data ====

// The user's friends list, as an array of friends. Nothing will be returned if the profile is private.

// * '''steamid'''
// ** 64 bit Steam ID of the friend.
// * '''relationship'''
// ** Relationship qualifier
// * '''friend_since'''
// ** Unix timestamp of the time when the relationship was created.

// === GetPlayerAchievements (v0001) ===

// Returns a list of achievements for this user by app id

// Example URL: http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamid=76561197972495328

// ==== Arguments ====

// * '''steamid'''
// ** 64 bit Steam ID to return friend list for.
// * '''appid'''
// ** The ID for the game you're requesting
// *'''l''' (Optional)
// ** Language. If specified, it will return language data for the requested language.

// ==== Result data ====

// A list of achievements.

// * '''apiname'''
// ** The API name of the achievement
// * '''achieved'''
// ** Whether or not the achievement has been completed.
// * '''unlocktime'''
// ** Unlock timestamp (unix). Defaults to "0" if achievement was not unlocked or time is unknown.
// * '''name''' (optional)
// ** Localized achievement name
// * '''description''' (optional)
// ** Localized description of the achievement

// === GetUserStatsForGame (v0002) ===

// Returns a list of achievements for this user by app id

// Example URL: http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamid=76561197972495328

// ==== Arguments ====

// * '''steamid'''
// ** 64 bit Steam ID to return friend list for.
// * '''appid'''
// ** The ID for the game you're requesting
// *'''l''' (Optional)
// ** Language. If specified, it will return language data for the requested language.

// === GetOwnedGames (v0001) ===

// GetOwnedGames  returns a list of games a player owns along with some playtime information, if the profile is publicly visible.  Private, friends-only, and other privacy settings are not supported unless you are asking for your own personal details (ie the WebAPI key you are using is linked to the steamid you are requesting).

// Example URL: http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=76561197960434622&format=json

// ==== Arguments ====

// *'''steamid'''
// ** The SteamID of the account.
// *'''include_appinfo'''
// ** Include game name and logo information in the output.  The default is to return appids only.
// *'''include_played_free_games'''
// ** By default, free games like Team Fortress 2 are excluded (as technically everyone owns them).  If include_played_free_games is set, they will be returned if the player has played them at some point.  This is the same behavior as the games list on the Steam Community.
// *'''format'''
// ** Output format. ''json'' (default), ''xml'' or ''vdf''.
// *'''appids_filter'''
// ** You can optionally filter the list to a set of appids.  Note that these cannot be passed as a URL parameter, instead you must use the JSON format described in [[Steam_Web_API#Calling_Service_interfaces]].  The expected input is an array of integers (in JSON: "appids_filter: [ 440, 500, 550 ]" )

// ==== Result layout ====

// * '''game_count''' the total number of games the user owns (including free games they've played, if include_played_free_games was passed)
// * A '''games''' array, with the following contents (note that if "include_appinfo" was not passed in the request, only '''appid''', '''playtime_2weeks''', and '''playtime_forever''' will be returned):
// ** '''appid''' Unique identifier for the game
// ** '''name''' The name of the game
// ** '''playtime_2weeks''' The total number of minutes played in the last 2 weeks
// ** '''playtime_forever''' The total number of minutes played "on record", since Steam began tracking total playtime in early 2009.
// ** '''img_icon_url''', '''img_logo_url''' - these are the filenames of various images for the game.  To construct the URL to the image, use this format: <nowiki>http://media.steampowered.com/steamcommunity/public/images/apps/</nowiki>''{appid}''/''{hash}''.jpg.  For example, the TF2 logo is returned as "07385eb55b5ba974aebbe74d3c99626bda7920b8", which maps to the URL: [http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg]
// ** '''has_community_visible_stats''' indicates there is a stats page with achievements or other game stats available for this game.  The uniform URL for accessing this data is <nowiki>http://steamcommunity.com/profiles/</nowiki>''{steamid}''/stats/''{appid}''.  For example, Robin's TF2 stats can be found at: [http://steamcommunity.com/profiles/76561197960435530/stats/440 http://steamcommunity.com/profiles/76561197960435530/stats/440].  You may notice that clicking this link will actually redirect to a vanity URL like /id/robinwalker/stats/TF2

// === GetRecentlyPlayedGames (v0001) ===

// GetRecentlyPlayedGames returns a list of games a player has played in the last two weeks, if the profile is publicly visible.  Private, friends-only, and other privacy settings are not supported unless you are asking for your own personal details (ie the WebAPI key you are using is linked to the steamid you are requesting).

// Example URL: http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=76561197960434622&format=json

// ==== Arguments ====

// *'''steamid'''
// ** The SteamID of the account.
// *'''count'''
// ** Optionally limit to a certain number of games (the number of games a person has played in the last 2 weeks is typically very small)
// *'''format'''
// ** Output format. ''json'' (default), ''xml'' or ''vdf''.

// ==== Result layout ====

// * '''total_count''' the total number of unique games the user has played in the last two weeks.  This is mostly significant if you opted to return a limited number of games with the '''count''' input parameter
// * A '''games''' array, with the following contents:
// ** '''appid''' Unique identifier for the game
// ** '''name''' The name of the game
// ** '''playtime_2weeks''' The total number of minutes played in the last 2 weeks
// ** '''playtime_forever''' The total number of minutes played "on record", since Steam began tracking total playtime in early 2009.
// ** '''img_icon_url''', '''img_logo_url''' - these are the filenames of various images for the game.  To construct the URL to the image, use this format: <nowiki>http://media.steampowered.com/steamcommunity/public/images/apps/</nowiki>''{appid}''/''{hash}''.jpg.  For example, the TF2 logo is returned as "07385eb55b5ba974aebbe74d3c99626bda7920b8", which maps to the URL: [http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg]


// === GetSchemaForGame (v2) ===

// GetSchemaForGame returns gamename, gameversion and availablegamestats(achievements and stats).

// Example URL: http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=XXXXXXXXXXXXXXXXX&appid=218620

// ==== Arguments ====

// *'''appid'''
// ** The AppID of the game you want stats of
// *'''format'''
// ** Output format. ''json'' (default), ''xml'' or ''vdf''.
// *'''l''' (Optional)
// ** Language. If specified, it will return language data for the requested language.

// ==== Result layout ====

// * '''game'''
// ** '''gameName(string)'''
// ** '''gameVersion (int) '''
// ** '''availableGameStats'''
// *** '''achievements(array)'''
// **** '''name'''
// **** '''defaultvalue'''
// **** '''displayName'''
// **** '''hidden'''
// **** '''description'''
// **** '''icon'''
// **** '''icongray'''
// *** '''stats(array)'''
// **** '''name'''
// **** '''defaultvalue'''
// **** '''displayName'''


// === GetPlayerBans (v1) ===

// GetPlayerBans returns Community, VAC, and Economy ban statuses for given players.

// Example URL: http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=XXXXXXXXXXXXXXXXX&steamids=XXXXXXXX,YYYYY

// ==== Arguments ====

// *'''steamids'''
// ** Comma-delimited list of SteamIDs

// ==== Result layout ====

// * '''players''' List of player ban objects for each 64 bit ID requested
// ** '''SteamId (string)''' The player's 64 bit ID.
// ** '''CommunityBanned (bool) ''' Indicates whether or not the player is banned from [http://steamcommunity.com Steam Community].
// ** '''VACBanned (bool)'''  Indicates whether or not the player has VAC bans on record.
// ** '''NumberOfVACBans (int)'''  Number of VAC bans on record.
// ** '''DaysSinceLastBan (int)'''  Number of days since the last ban.
// ** '''NumberOfGameBans (int)'''  Number of bans in games, this includes CS:GO Overwatch bans.
// ** '''EconomyBan (string)''' The player's ban status in the economy. If the player has no bans on record the string will be "none", if the player is on probation it will say "probation", etc.


// == Community data ==

// The Steam community data interface (XML only) is described here: https://partner.steamgames.com/documentation/community_data


// == Calling Service interfaces ==

// There is a new style of WebAPI which we refer to as "Services".  They function in many ways like the WebAPIs you are used to, the main difference being that all service APIs will accept their arguments as a single JSON blob in addition to taking them as GET or POST parameters.  To pass in data as JSON, invoke the webapi with a parameter set like:
//  ?key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&format=json&input_json={"steamid": 76561197972495328}
// Note that the JSON will need to be URL-encoded.  The "key" and "format" fields should still be passed as separate parameters, as before.  POST requests are supported as well.

// You can identify if a WebAPI is a "Service" by the name of the interface; if it ends in "Service" like "IPlayerService", then it supports this additional method of passing parameter data.  Some Service methods have parameters that are more complex structures and require this different input format.

// == Implementations ==
// * [https://github.com/ribasco/async-gamequery-lib Asynchronous Game Query Library] A Java 8 based Asynchronous Game Query Library powered by Netty
// * [https://github.com/zyberspace/php-steam-web-api-client Steam Web API Client for PHP] Automatically generated api client for the Steam Web API.
// * [https://github.com/andrewmcwatters/steamweb-lua-sdk Steam Web Lua SDK] Lua 5 module which covers all new interfaces as utilized in Steam Mobile
// * [https://github.com/Overv/SteamWebAPI Steam Web API library] C# library for Steam Friends interaction.
// * [https://github.com/SteamRE/SteamKit SteamKit] .NET library for Steam integration, includes WebAPI functionality through dynamic typing.
// * [[Steam Condenser]] Ruby, PHP, and Java library.
// * [https://github.com/smiley/steamapi SteamAPI (Unofficial)] Python 2.7+, object-oriented library.
// * [https://github.com/killerfish/perlsteamapi PerlSteamAPI] Perl OO-module which covers interfaces listed in WebAPI.
// * [https://github.com/killerfish/vdfparser VDFParser] Parser in perl for Valve Data Format (VDF).
// * [https://github.com/rossengeorgiev/vdf-parser VDF Libraries] VDF libs for Python,PHP and Javascript
// * [https://github.com/babelshift/SteamWebAPI2 SteamWebAPI2 (Unofficial)] C# library to wrap around all Steam Web API endpoints.
// * [http://steamwebapi.azurewebsites.net/ Steam Web API Documentation (Unofficial)] Online tool to help understand all Steam Web API endpoints, their calling structure, and any required parameters.
// * [https://steamid.eu/api.php SteamID - ThirdParty API] (Unofficial) - Third party API site which may show historic profile data & Converted IDs