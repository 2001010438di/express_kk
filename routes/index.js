var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* タイトルの変更 */	
  /* res.render('index', { title: 'Express' }); */
  res.render('index', { title: 'Express 2' });
});

module.exports = router;
