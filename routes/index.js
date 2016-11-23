const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('home route')
  })

module.exports = router;
