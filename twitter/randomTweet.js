const utils = require('../utils')
const axios = require('axios')
const querystring = require('querystring')

const tweet = (twitter) => {
    utils.logProcess("Generating random tweet")

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: querystring.stringify({
            method: "getQuote", 
            format: "json", 
            lang: "en"
        }),
        url: 'http://api.forismatic.com/api/1.0/',
    }

    //generate randomised tweet
    axios(options)
        .then(function (response) {
            const tweet = response.data.quoteText
            if (tweet) {
                const url = "/statuses/update.json?status=" + tweet
                // send randomised tweet
                twitter.postCustomApiCall(url, 
                    {},
                    (err) => {
                        utils.logError(err)
                    }, 
                    (response) => {
                        utils.logSuccess("Successfully tweeted: " + tweet)
                        return true
                    })
            } else { 
                utils.logError("Tweet generation unsuccessful, retrying after 10s...")
                setTimeout(() => tweet(twitter), 10000) 
            }
        })
        .catch(function (err) {
            utils.logError(err)
        }
    )

    const time = utils.randomTime()
    setTimeout(() => tweet(twitter), time)
}

module.exports = tweet
