const router = require('express').Router();

const session = require('express-session');
const google = require('googleapis');
const gmail = google.gmail('v1');
const OAuth2 = google.auth.OAuth2;
const google2 = require('googleapis').oauth2("v2")

function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}

const getUserData = (req, res) => {
    var oauth2Client = getOAuthClient();
    oauth2Client.setCredentials(req.session["tokens"]);

    var p = new Promise(function (resolve, reject) {
        console.log(req.session.tokens.id_token);
        google2.userinfo.v2.me.get({auth: oauth2Client }, function(err, response) {
            resolve(response || err);
        })
    }).then(function (data) {
        console.log('homeRoute Hit');
        console.log(data);
    })
}

router.route('/')
  .get(getUserData)



module.exports = router;
