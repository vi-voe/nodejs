const { Tasks } = require('../../utils/pseudoDb');
const Task = require('./task.model');

const getAll = async (boardId) => Tasks.filter(obj => obj.boardId === boardId);

const getTask = async(boardId, taskId) => Tasks.find(obj => {
    if(obj.id === taskId && obj.boardId === boardId) {
      return obj
    }
    return false
  })

const saveTask = async(boardId, taskInfo) => {
  const newTask = new Task({ ...taskInfo, boardId })
  Tasks.push(newTask);
  return newTask;
}

const updateTask = async(boardId, taskId, taskInfo) => {
  const task = await getTask(boardId, taskId);
  task.title = taskInfo.title;
  task.order = taskInfo.order;
  task.description = taskInfo.description;
  task.userId = taskInfo.userId;
  task.boardId = taskInfo.boardId;
  task.columnId = taskInfo.columnId;
  return task;
}

const deleteTask = async(boardId, taskId) => {
  const indexOfUser = Tasks.findIndex(obj => obj.id === taskId)
  Tasks.splice(indexOfUser, 1);
}

const deleteTasksFromBoard = async(boardId) => {
  const allTasks = await getAll(boardId);
  allTasks.map(task => deleteTask(boardId, task.id));    
}

const unassignUser = async(userId) => {
  Tasks.map(task => {
    const currentTask = task
    if (currentTask.userId === userId) currentTask.userId = null;
    return currentTask;
  })
}

module.exports = { getAll, saveTask, getTask, updateTask, deleteTask, deleteTasksFromBoard, unassignUser };