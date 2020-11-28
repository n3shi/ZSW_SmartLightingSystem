var express = require('express');
var router = express.Router();
module.exports = function(queries) {
  /* GET home page. */
  router.get('/', function (req, res) {
    let p = require('path').join(__dirname, '../views/index.html')
    let f = require('fs').readFileSync(p)
    console.log(p)
    res.sendFile('/views/index.html');
  });

  return router;
}
