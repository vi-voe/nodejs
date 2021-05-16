const router = require('express').Router();
const taskService = require('./tasks.service');
const Task = require('./task.model')

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAllTasks();
  // map user fields to exclude secret fields like "password"
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id);
  res.json(task);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.saveTask(new Task({title: req.body.title, columns: req.body.columns}));
  res.status(task? 201 : 400).json(task);
});

router.route('/:id').put(async (req, res) => {
  
  const task = await taskService.updateTask(req.params.id, {title: req.body.title, columns: req.body.columns});
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.status(204).json('The user has been deleted');
});

module.exports = router;
