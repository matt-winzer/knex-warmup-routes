var express = require('express');
var router = express.Router();
var query = require('../db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', (req, res, next) => {
  query.getAllUsers().then(users => {
    res.json(users);
  });
});

router.post('/user', (req, res, next) => {
  query.getUserByEmail(req.body.email).then(user => {
    res.json(user);
  });
});

module.exports = router;
