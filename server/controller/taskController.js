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

const deleteById = async (req, res) => {
  const { id } = req.params;
  await taskService.deleteById(id);
  return res.status(204).end();
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  await taskService.updateById(id, { name, status });
  return res.status(200).end();
};

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
};
