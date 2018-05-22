var express = require('express');
var router = express.Router();

/* GET tutorial page. */
router.get('/', function(req, res, next) {
  res.render('tutorial');
});

router.get('/setup_BBB', function(req, res, next) {
  res.render('setup_BBB');
});

module.exports = router;
