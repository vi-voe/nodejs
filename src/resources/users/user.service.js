const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (userId) => usersRepo.getUser(userId);
const saveUser = (newUser) => usersRepo.saveUser(newUser);
const updateUser = (userId, userInfo) => usersRepo.updateUser(userId, userInfo);
const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAll, saveUser, getUser, updateUser, deleteUser };
