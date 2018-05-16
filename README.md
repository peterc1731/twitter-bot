# Twitter Competition Entering Bot

## Introduction

This project is a twitter bot built with node.js. 

The bot searches twitter at random intervals for any tweets related to competitions or giveaways, then retweets and follows the original poster of the tweet.

Additionally, the bot tweets random philosophical sentences at random intervals, so the account at least vaguely appears to be controlled by a real person and does not arouse suspicion.

The result of the continued operation of this bot should be lots of free items! Be sure to keep checking the DMs of the account you're using to see if you've won anything.

## Installation

Start by installing the dependencies:

```bash
npm install
```

Then create a file in the route directory of the project called `local.env.sh` as shown below. This file will contain your twitter api keys/tokens for running the project locally. Alternatively if you are hosting the project on a server, you can set the same environment variables manually for added security.

```bash
#!/bin/bash

export APP_CONSUMER_KEY={ twitter api consumer key }
export APP_CONSUMER_SECRET={ twitter api consumer secret }
export APP_ACCESS_TOKEN={ twitter api access token }
export APP_ACCESS_SECRET={ twitter api access token secret }
```

## Starting the Bot

If running the bot locally, you can start the bot with: 

```bash
npm run start-local
```

Alternatively if hosting on a server and your envs are set, simply: 

```bash
npm start
```

## Tuneable Parameters

There are several easily tuneable parameters in the project to alter what kind of tweets you find, as well as the frequency at which the bot tweets.

- In the file `/utils.js`, the function `randomTime()` generates the delay time between tweets. 

- In the file `/twitter/search.js`, a search query is generated as a random selection between two hashtags, this can be extended to any number of different hastags, or even just one.

- Also in the file `/twitter/search.js`, the results of the search are filtered using the tweet bosy text to ensure any potentially retweetable tweets conform to specific criteria, such as containing the words 'retweet' and 'follow'.

- In the file `/twitter/randomTweet.js`, we generate a random tweet using a quotes API. Any other method for generating human sounding sentences can be used as an alternative here.