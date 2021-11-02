const taskService = require('../service/taskService');

const getAll = async (req, res) => {
  const allTasks = await taskService.getAll();
  return res.status(200).json(allTasks);
};

const create = async (req, res, _next) => {
  const { name, status } = req.body;
  await taskService.create({ name, status });
  return res.status(201);
};

module.exports = {
  getAll,
  create,
};
