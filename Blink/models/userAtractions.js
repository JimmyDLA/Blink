const db = require('./../lib/dbConnect')

// function getAllActivities(req, res, next) {
  // db.any(`SELECT * FROM`)
  // .then((userActivites) => {
  //   res.userActivites = userActivites;
  //   next();
  // })
// };
// function addActivity(req, res, next) {
  // db.none(`INSERT INTO events`)
////   db.none(`INSERT INTO events (id, name, formatted_address, icon, rating)
////            VALUES ($/eventId/, $/name/, $/formatted_address/, $/icon/, $/rating/);`,
////           res.addedActivity)
//     .then(() => next());
// };

// function deleteActivity(req, res, next) {
//   db.none(`DELETE FROM events WHERE id = $/eventId/`, req.params)
//   .then(() => next());
// }

module.exports = {
  // getAllActivities,
  // addActivity,
  // deleteActivity
};
