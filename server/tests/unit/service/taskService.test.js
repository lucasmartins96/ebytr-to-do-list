const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('chai').should();

const TaskModel = require('../../../model/Task');
const taskService = require('../../../service/taskService');

describe('Testando as funções da camada SERVICE', function () {
  describe('Quando é buscado com sucesso', function () {
    beforeEach(async function () {
      const mongoServer = await MongoMemoryServer.create();
      const createdAt = new Date('10/31/2021 12:00:00');
      await mongoose.connect(mongoServer.getUri(), { dbName: 'EbytrToDoList' });
      await TaskModel.create({ name: 'Escovar os dentes', createdAt, status: 'pronto' });
    });
  
    it('deve retornar um array de objetos', async function () {
      const allTasks = await taskService.getAll();
      const [task] = allTasks;
      allTasks.should.to.be.a('array');
      task.should.to.be.a('object');
    });
  
    afterEach(async function (done) {
      mongoose.disconnect();
      done();
    });
  });
});
