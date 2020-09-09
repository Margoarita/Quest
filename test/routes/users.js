var express = require('express');
var db = require('../settings');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM "user"')
  .then(function (data) {
    console.log(data);
    res.send(data);
  })
  .catch(function (error) {
    console.log(error);
  });
});

router.post('/registration', function(req, res, next) {
  let login = req.body.login;
  let password = req.body.password;
  let params = [login, password];
  db.any('INSERT INTO "user" (login, password) VALUES ($1, $2)', params)
  .then(function (data) {
    console.log(data);
    res.send(data);
  })
  .catch(function (error) {
    console.log(error);
  });
});



module.exports = router;
