const config = require("./config");

const credentials = {
    client: {
        id: config.client_id,
        secret: config.client_secret
    },
    auth: {
        tokenHost: "https://slack.com/api/oauth.access"
    }
};

const oauth2 = require('simple-oauth2').create(credentials);

const tokenConfig = {
  code: config.state
};

oauth2.authorizationCode.getToken(tokenConfig, (error, result) => {
  if (error) {
    return console.log('Access Token Error', error.message);
  }

  const token = oauth2.accessToken.create(result);
});