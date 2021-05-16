const { Boards } = require('../../utils/pseudoDb');

const getAll = async () => Boards

const getBoard = async(boardId) => Boards.find(obj => obj.id === boardId)

const saveBoard = async(newBoard) => {
  Boards.push(newBoard)
  return newBoard;
}

const updateBoard = async(boardId, boardInfo) => {
  const board = await getBoard(boardId);
  board.title = boardInfo.title;
  board.columns = boardInfo.columns;
  return board;
}

const deleteBoard = async(boardId) => {
  const indexOfUser = Boards.findIndex(obj => obj.id === boardId);
  Boards.splice(indexOfUser, 1);
}

module.exports = { getAll, saveBoard, getBoard, updateBoard, deleteBoard };