const express = require('express');
const logger = require('morgan');
require('dotenv');

const session = require('express-session');
const google = require('googleapis');
const gmail = google.plus('v1');
const clientId = process.env.APP_CLIENT_ID
const clientSecret = process.env.APP_CLIENT_SECRET;

const app = express();

app.use(logger('dev'));

// ********* http://voidcanvas.com/googles-oauth-api-node-js/ **********
app.use(session({
  secret: 'secret_eorivj340g45j9g4509j9wcr',
    resave: true,
    saveUninitialized: true
}));


//routing
app.use('/', require('./routes/index.js'))
app.use('/utils/createLoginLink', require('./routes/utils.js'))
app.use('/logged', require('./routes/logged.js'))
app.use('/home', require('./routes/home.js'))



const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`SERVER IS LISTENING ON ${PORT}`));
