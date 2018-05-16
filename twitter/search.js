const utils = require('../utils')
const retweet = require('./retweet')
const follow = require('./follow')

const search = (twitter) => {
    utils.logProcess("Searching for tweets...")

    // find tweets with #giveaway or #competition
    const query = ["#giveaway", "#competition"][Math.floor(Math.random() * 2)]

    twitter.getSearch({ q: query, count: 100, result_type: 'recent' }, 
        (err) => {
            utils.logError(err)
        }, 
        (response) => {
            const tweets = JSON.parse(response).statuses.filter((status) => {
                const text = status.text.toLowerCase()
                // filter results
                return ( text.includes("retweet") || text.includes("rt") ) 
                    && text.includes("follow")
                    && !text.includes("favourite") 
                    && !text.includes("comment")
            })

            let tweet
            if (tweets.length) {
                tweet = tweets[Math.floor(Math.random() * tweets.length)]
                // retweet single tweet
                const retweeted = retweet(twitter, tweet.id_str, tweet.text)

                // follow tweeter of said tweet
                const username = tweet.retweeted_status ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name
                follow(twitter, username)

                if (!retweeted) {
                    utils.logProcess("Retweet unsuccessful. Searching again after 10s...")
                    setTimeout(() => search(twitter), 10000)
                }

            } else {
                utils.logProcess("No appropriate tweets found. Searching again after 10s...")
                setTimeout(() => search(twitter), 10000)

            }
        }
    )
    
    const time = utils.randomTime()
    setTimeout(() => search(twitter), time)
}

module.exports = search
