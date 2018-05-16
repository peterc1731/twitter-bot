const config = require('./config')
const utils = require('./utils')
const search = require('./twitter/search')
const randomTweet = require('./twitter/randomTweet')
const Twitter = require('twitter-node-client').Twitter
const twitter = new Twitter(config);

console.clear()
utils.titleMessage("Successfully started Twitter Competition Bot ")
utils.subtitleMessage("Created by Peter Carpenter")

// intialise search
search(twitter)

// initialise random tweets
randomTweet(twitter)
