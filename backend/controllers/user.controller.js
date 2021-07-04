const db = require('../models');

const User = db.users;

exports.create = (req, res) => {

  // Validate User Creation
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: 'User info can not be empty!'
    });
    return;
  }

  // Need to hash password~
  const user = new User({
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password
  });

  // Save User to db
  user.save(user).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'An error occurred while creating new User'
    });
  });
};

exports.findAll = (req, res) => {
  User.find({}).then (data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'An error occurred while retrieving all Users'
    });
  });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};