const { Twitter } = require('twitter-node-client');
const express = require('express');
const config = require('./config');
const utils = require('./utils');
const search = require('./twitter/search');
const randomTweet = require('./twitter/randomTweet');

const twitter = new Twitter(config);

const app = express();

console.clear();
utils.titleMessage('Successfully started Twitter Competition Bot ');
utils.subtitleMessage('Created by Peter Carpenter');

// dummy response to check if the bot is alive
app.get('/', (req, res) => res.send("Hello, I'm a bot!"));
app.listen(process.env.PORT, () => utils.logProcess(`Web server is running on port ${process.env.PORT}`));

// intialise search
search(twitter);

// initialise random tweets
randomTweet(twitter);
