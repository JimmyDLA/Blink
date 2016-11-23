const session = require('express-session');
const google = require('googleapis');
const gmail = google.plus('v1');
const OAuth2 = google.auth.OAuth2;

// ********* http://voidcanvas.com/googles-oauth-api-node-js/ **********
function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}
function getAuthUrl (clientId, clientSecret) {
    var oauth2Client = getOAuthClient(clientId, clientSecret);
    // generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
      'https://mail.google.com/'
    ];
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes // If you only need one scope you can pass it as string
    });

    return url;
}

module.exports = {
    getAuthUrl
}
