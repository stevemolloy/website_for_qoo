var express = require('express');
var router = express.Router();

/* GET tutorial page. */
router.get('/', function(req, res, next) {
  res.render('tutorial');
});

router.get('/setup_rpi', function(req, res, next) {
  res.render('setup_rpi');
});

module.exports = router;
