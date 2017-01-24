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

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser
};
