const axios = require('axios');
const querystring = require('querystring');
const utils = require('../utils');

const tweet = (twitter) => {
  utils.logProcess('Generating random tweet');

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify({
      method: 'getQuote',
      format: 'json',
      lang: 'en',
    }),
    url: 'http://api.forismatic.com/api/1.0/',
  };

  // generate randomised tweet
  axios(options)
    .then((response) => {
      const tweetText = response.data.quoteText;
      if (tweetText) {
        const url = `/statuses/update.json?status=${tweetText}`;
        // send randomised tweet
        twitter.postCustomApiCall(url,
          {},
          (err) => {
            utils.logError(err);
          },
          () => {
            utils.logSuccess(`Successfully tweeted: ${tweetText}`);
            return true;
          });
      } else {
        utils.logError('Tweet generation unsuccessful, retrying after 10s...');
        setTimeout(() => tweet(twitter), 10000);
      }
    })
    .catch((err) => {
      utils.logError(err);
    });

  const time = utils.randomTime();
  setTimeout(() => tweet(twitter), time);
};

module.exports = tweet;
