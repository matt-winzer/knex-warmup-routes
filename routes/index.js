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

router.get('/exercise', (req, res, next) => {
  query.getAllExercises().then(exercises => {
    res.json(exercises);
  });
});

router.post('/exercise', (req, res, next) => {
  query.createExercise(req.body)
    .returning('*')
    .then(exercise => {
      res.json(exercise);
    });
});

router.get('/exercise/:id', (req, res, next) => {
  query.getExerciseById(req.params.id).then(exercise => {
    res.json(exercise);
  });
});

router.put('/exercise/:id', (req, res, next) => {
  query.editExercise(req.params.id, req.body).then(exercise => {
    res.json(exercise);
  });
});

router.delete('/exercise/:id', (req, res, next) => {
  query.deleteExercise(req.params.id).then(exercise => {
    res.json(exercise);
  });
});

module.exports = router;
