var express = require('express');
var router = express.Router();

/* GET cat. */
router.get('/', function(req, res, next) {
  res.send(['Муся', 'Барсик', 'Персик']);
});


module.exports = router;