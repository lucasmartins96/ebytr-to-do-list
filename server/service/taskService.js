const Joi = require('joi');
const TaskModel = require('../model/Task');
const RequestError = require('../utils/RequestError');

const getAll = () => TaskModel.find({});

const validateFields = (payload) => {
  const { error } = Joi.object({
    name: Joi.string().not().empty().required(),
    status: Joi.alternatives().try(
      Joi.string().pattern(/em andamento/, 'em andamento'),
      Joi.string().pattern(/pronto/, 'pronto'),
      Joi.string().pattern(/pendente/, 'pendente'),
    ).not().empty()
.required(),
  }).validate(payload);

  if (error) {
    const { details } = error;
    const [errorDetail] = details;
    return errorDetail.message;
  }
  return null;
};

const create = async (payload) => {
  const joiErrorMessage = validateFields(payload);
  if (joiErrorMessage) throw new RequestError('badRequest', joiErrorMessage);

  return TaskModel.create(payload);
};

module.exports = {
  getAll,
  create,
};
