const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/tasks.memory.repository');

const getAllBoards = () => boardRepo.getAll();
const getBoard = (boardId) => boardRepo.getBoard(boardId);
const saveBoard = (newUser) => boardRepo.saveBoard(newUser);
const updateBoard = (boardId, boardInfo) => boardRepo.updateBoard(boardId, boardInfo);
const deleteBoard = (boardId) => {
  boardRepo.deleteBoard(boardId);
  taskRepo.deleteTasksFromBoard(boardId);
};

module.exports = { getAllBoards, saveBoard, getBoard, updateBoard, deleteBoard };
