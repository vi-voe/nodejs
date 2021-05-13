const User = require("../resources/users/user.model");

const db = {
  Users: [new User(), new User()],
  Boards: [],
  Tasks: []
}

module.exports = db;