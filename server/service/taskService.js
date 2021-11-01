const TaskModel = require('../model/Task');

const getAll = () => TaskModel.find({});

module.exports = {
  getAll,
};
