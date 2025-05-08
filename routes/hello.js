var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* デフォルト値 Express */
  /* res.render('index', { title: 'Express' }); */

  /* タイトルの変更 Express 2 */	  
  /* res.render('index', { title: 'Express 2' }); */
  
  /* タイトルの変更 Hello Express */  
  res.render('hello', { title: 'Hello Express' });
});

module.exports = router;
