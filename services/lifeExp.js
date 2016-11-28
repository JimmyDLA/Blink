const fetch = require('node-fetch');
const db = require('./../lib/dbConnect');


function death(req, res, next) {
  db.one(`SELECT * FROM users WHERE session_id = $1;`, [req.sessionID])
  .then((data) => {
      console.log(data);
    next()
  })
  .catch((err) => {
    next(err);
  })
  gender = req.body.userGender;
  dob = req.body.userDOB;
  const API_ENDPOINT = `http://api.population.io//1.0/life-expectancy/total/${gender}/United%20States/${dob}`;
  fetch(API_ENDPOINT)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.log(`--> life-expectancy Error: ${err}`);
    next(err);
  })
}


module.exports = { death }
