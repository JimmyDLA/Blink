const router = require('express').Router();
const session = require('express-session');
const google = require('googleapis');
const gmail = google.plus('v1');
const OAuth2 = google.auth.OAuth2;

// http://voidcanvas.com/googles-oauth-api-node-js/

function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}
function getAuthUrl (clientId, clientSecret) {
  //http://stackoverflow.com/questions/36586539/with-the-npm-package-googleapis-how-do-i-get-the-users-email-address-after-auth
    var oauth2Client = getOAuthClient(clientId, clientSecret);
    // generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
      'https://www.googleapis.com/auth/userinfo.email'
    ];
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes // If you only need one scope you can pass it as string
    });

    return url;
}


const createUrl = (req, res, next) => {
  let myurl = getAuthUrl('491020538989-p7rt3a2bpl8qloj56qedsd327q5sg10p.apps.googleusercontent.com', 'UakPsyWEGXBp__cjsqcMB1hA');
  //console.log(myurl);
  res.authurl = myurl;
  next();
}
router.route('/')
  .get(createUrl, (req, res) => {
    res.send(`${res.authurl}`)
  })

module.exports = router;
