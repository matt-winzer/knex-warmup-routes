var express = require('express');
var router = express.Router();
var knex = require('./knex');
var bcrypt = require('bcrypt');

function getAllUsers() {
  return knex('user');
}

function getUserByEmail(email) {
  return knex('user').where('email', email).first();
}

function createUser(user) {
  return knex('user').insert({
    name: user.name,
    email: user.email,
    password: bcrypt.hashSync(user.password, 10)
  });
}

function getAllExercises() {
  return knex('exercise');
}

function createExercise(req) {
  return knex('exercise').insert({
    type: req.type,
    duration: req.duration,
    user_id: req.user_id
  });
}

function getExerciseById(id) {
  return knex('exercise').where('id', id);
}

function editExercise(id, req) {
  return knex('exercise').where('id', id).update(req);
}

function deleteExercise(id) {
  return knex('exercise').where('id', id).del();
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  getAllExercises,
  createExercise,
  getExerciseById,
  editExercise,
  deleteExercise
};
