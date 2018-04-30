var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET read_more page. */
router.get('/read_more', function(req, res, next) {
  res.render('read_more');
});

module.exports = router;
