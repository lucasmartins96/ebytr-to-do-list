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

    it('deve retornar um array de objetos com as propriedades "_id, name, createdAt e status"',
    async function () {
      const allTasks = await taskService.getAll();
      const [task] = allTasks;
      task.should.to.have.property('_id');
      task.should.to.have.property('name');
      task.should.to.have.property('createdAt');
      task.should.to.have.property('status');
    });
  
    afterEach(async function (done) {
      mongoose.disconnect();
      done();
    });
  });

  describe('Insere uma nova tarefa no BD', function () {
    describe('Testando as validações', function () {
      describe('Campos obrigatórios', function () {
        it('Deve lançar um erro quando o campo "name" for indefinido', async function () {
          const taskPayload = { status: 'pendente' };
          const validationError = await taskService.create(taskPayload).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"name" is required');
        });

        it('Deve lançar um erro quando o campo "status" for indefinido', async function () {
          const taskPayload = { name: 'revisar Agenda' };
          const validationError = await taskService.create(taskPayload).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"status" is required');
        });
      });
      
      describe('Campos vazios', function () {
        it('Deve lançar um erro quando o campo "name" for vazio', async function () {
          const validationError = await taskService.create({ name: '' }).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"name" is not allowed to be empty');
        });
  
        it('Deve lançar um erro quando o campo "status" for vazio', async function () {
          const taskPayload = { name: 'revisar agenda', status: '' };
          const validationError = await taskService.create(taskPayload).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"status" does not match any of the allowed types');
        });
      });

      describe('Campos com tipos inválidos', function () {
        it('Deve lançar um erro quando o campo "name" não for string', async function () {
          const validationError = await taskService.create({ name: 101010 }).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"name" must be a string');
        });
  
        it('Deve lançar um erro quando o campo "status" não for string', async function () {
          const taskPayload = { name: 'revisar PDI', status: 101010 };
          const validationError = await taskService.create(taskPayload).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"status" must be one of [string]');
        });
      });
      
      describe('Valores do campo "status"', function () {
        it('Deve lançar um erro quando o campo não for "pendente", "em andamento" ou "pronto"', 
        async function () {
          const taskPayload = { name: 'revisar PDI', status: 'concluído' };
          const validationError = await taskService.create(taskPayload).catch((err) => err);
          const createTaskFn = function () { throw validationError; };
          createTaskFn.should.Throw('"status" does not match any of the allowed types');
        });
      });
    });

    describe('Quando é cadastrado com sucesso', function () {
      const taskPayload = { name: 'estudar typescript', status: 'pendente' };
      beforeEach(async function () {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri(), { dbName: 'EbytrToDoList' });
      });

      it('A tarefa deve estar cadastrada no banco', async function () {
        await taskService.create(taskPayload);
        const allTasks = await taskService.getAll();
        const [task] = allTasks;
        task.should.to.include(taskPayload);
      });

      afterEach(async function (done) {
        mongoose.disconnect();
        done();
      });
    });
  });
});
