var express = require('express');
var router = express.Router();

// First Hello World Program Required
router.get('/', function (req, res) {
    res.send('Hello World!');
});

/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
