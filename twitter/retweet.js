const utils = require('../utils');

const retweet = (twitter, tweetId, text) => {
  // retweet the tweet with id 'tweet_id'
  const url = `/statuses/retweet/${tweetId}.json`;
  twitter.postCustomApiCall(url,
    {},
    (err) => {
      utils.logError(err);
      return false;
    },
    () => {
      utils.logSuccess(`Successfully retweeted: ${text}`);
      return true;
    });
};

module.exports = retweet;
