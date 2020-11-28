var express = require('express');
var router = express.Router();
module.exports = function(queries) {
  /* GET home page. */
  router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
  });

  return router;
}
