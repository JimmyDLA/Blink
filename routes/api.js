const router = require('express').Router();
const { getUserProfile, getAllUsers, saveDOB } = require('./../models/userData');
const { textSearch, imgSearch } = require('./../services/googleSearch');
const { death } = require('./../services/lifeExp');
const { addToBucket } = require('./../models/usersBucket');

const sendResponse = (req, res) => res.json(res.data);
const sessionErrorHandler = (err, req, res, next) => {
  console.log('no session, redirect to login');
  res.data = {redirectUrl: 'http://localhost:3001'}
  return res.json(res.data)
}
// routes for user login
router.route('/getUserData')
  .get(getUserProfile, death, sendResponse, sessionErrorHandler)

router.route('/getAllUsers')
  .get(getAllUsers, sendResponse)


router.route('/googleSearch')
  .post(textSearch, imgSearch, sendResponse)

router.route('/saveDOB')
  .put(saveDOB, sendResponse)
//routes for usersBucketItems
router.route('/bucket')
  .post(addToBucket, (req, res) => res.sendStatus(204))

router.post('/BucketListItems',(req, res) => {
  res.json({ message: 'Activity has been added to your Bucket List!' });
});

router.delete('/:ActivityID',(req, res) => {
  res.json({ message: 'Activity Successfully Deleted' });
});

module.exports = router;
