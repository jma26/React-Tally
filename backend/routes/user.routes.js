module.exports = app => {
  const users = require('../controllers/user.controller.js');

  const router = require('express').Router();

  // Create a new User
  router.post('/', users.create);

  // Retrieve all users
  router.get('/', users.findAll);

  // Update a new User with id
  router.patch('/:id', users.update);

  // Delete a user with id
  router.delete('/:id', users.delete);

  app.use('/api/users', router);
};