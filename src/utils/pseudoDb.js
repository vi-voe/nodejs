const User = require("../resources/users/user.model");
const Board = require("../resources/board/board.model");

const db = {
  Users: [new User(), new User()],
  Boards: [new Board()],
  Tasks: []
}

module.exports = db;