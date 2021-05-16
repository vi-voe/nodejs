const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(users ? 200 : 401).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.status(user ? 200 : 400).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.saveUser(new User({name: req.body.name, login: req.body.login, password: req.body.password}));
  res.status(user ? 201 : 404).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, {name: req.body.name, login: req.body.login, password: req.body.password});
  res.status(user ? 200 : 400).json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  res.status(204).json('The user has been deleted');
});

module.exports = router;
