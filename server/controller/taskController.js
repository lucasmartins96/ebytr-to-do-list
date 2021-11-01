const taskService = require('../service/taskService');

const getAll = async (req, res) => {
  const allTasks = await taskService.getAll();
  return res.status(200).json(allTasks);
};

module.exports = {
  getAll,
};
