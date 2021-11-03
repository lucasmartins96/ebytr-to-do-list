const taskService = require('../service/taskService');

const getAll = async (req, res) => {
  const allTasks = await taskService.getAll();
  return res.status(200).json(allTasks);
};

const create = async (req, res) => {
  const { name, status } = req.body;
  await taskService.create({ name, status });
  return res.status(201).end();
};

module.exports = {
  getAll,
  create,
};
