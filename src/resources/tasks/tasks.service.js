const taskRepo = require('./tasks.memory.repository');

const getAllTasks = (boardId) => taskRepo.getAll(boardId);
const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);
const saveTask = (boardId, taskInfo) => taskRepo.saveTask(boardId, taskInfo);
const updateTask = (boardId, taskId, taskInfo) => taskRepo.updateTask(boardId, taskId, taskInfo);
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);

module.exports = { getAllTasks, saveTask, getTask, updateTask, deleteTask };
