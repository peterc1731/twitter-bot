const utils = require('../utils')

const retweet = (twitter, tweet_id, text) => {
    // retweet the tweet with id 'tweet_id'
    const url = `/statuses/retweet/${tweet_id}.json`
    twitter.postCustomApiCall(url, 
        {}, 
        (err) => {
            utils.logError(err)
            return false
        }, 
        (response) => {
            utils.logSuccess("Successfully retweeted: " + text)
            return true
        }
    )
}

module.exports = retweet
