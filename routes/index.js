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

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET tutorial page. */
router.get('/tutorial', function(req, res, next) {
  res.render('tutorial');
});

/* GET features page. */
router.get('/features', function(req, res, next) {
  res.render('features');
});

module.exports = router;
