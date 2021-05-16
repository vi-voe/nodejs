const { Users } = require('../../utils/pseudoDb');

const getAll = async () => Users

const getUser = async(userId) => Users.find(obj => obj.id === userId)

const saveUser = async(newUser) => {
  Users.push(newUser)
  return newUser;
}

const updateUser = async(userId, userInfo) => {
  const user = await getUser(userId);
  user.name = userInfo.name;
  user.login = userInfo.login;
  user.password = userInfo.password;
  // user = {...user, ...userInfo}
  return user;
}

const deleteUser = async(userId) => {
  const indexOfUser = Users.findIndex(obj => obj.id === userId)
  Users.splice(indexOfUser, 1);
}

module.exports = { getAll, saveUser, getUser, updateUser, deleteUser };