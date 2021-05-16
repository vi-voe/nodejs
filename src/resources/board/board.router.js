const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model')
const taskService = require('../tasks/tasks.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  // map user fields to exclude secret fields like "password"
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.saveBoard(new Board({title: req.body.title, columns: req.body.columns}));
  res.status(board? 201 : 400).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, {title: req.body.title, columns: req.body.columns});
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.id);
  res.status(204).json('The board has been deleted');
});

router.route('/:id/tasks').get(async (req, res) => {
  const tasks = await taskService.getAllTasks(req.params.id);
  res.json(tasks);
});

router.route('/:id/tasks/:taskId').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id, req.params.taskId);
  res.status(task ? 200 : 404).json(task);
});

router.route('/:id/tasks').post(async (req, res) => {
  const task = await taskService.saveTask(req.params.id, req.body);
  res.status(task? 201 : 400).json(task);
});

router.route('/:id/tasks/:taskId').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.params.taskId, req.body);
  res.json(task);
});

router.route('/:id/tasks/:taskId').delete(async (req, res) => {
  await taskService.deleteTask(req.params.id, req.params.taskId);
  res.status(204).json('The user has been deleted');
});

module.exports = router;
