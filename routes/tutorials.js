var express = require('express');
var router = express.Router();

/* GET tutorial page. */
router.get('/', function(req, res, next) {
  res.render('tutorial');
});

module.exports = router;
