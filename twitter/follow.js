const utils = require('../utils')

const follow = (twitter, username) => {
    // follow a user with screen name 'username'
    twitter.postCreateFriendship({ screen_name: username }, 
        (err) => {
            utils.logError(err)
            return false
        }, 
        (response) => {
            utils.logSuccess("Successfully followed: " + username)
            return true
        })
}

module.exports = follow
