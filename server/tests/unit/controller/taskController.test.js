const sinon = require('sinon');
require('chai').should();

const taskController = require('../../../controller/taskController');
const taskService = require('../../../service/taskService');
const allTasks = require('../../utils/response');

describe('Testando as funções da camada CONTROLLER', function () {
  describe('Ao chamar o controller de getAll', function () {
    const response = {};
    const request = {};

    beforeEach(function () {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(taskService, 'getAll')
        .resolves(allTasks);
    });

    it('Retornar o código de status 200 - OK', async function () {
      await taskController.getAll(request, response);

      response.status.calledWith(200).should.to.be.true;
    });

    it('Executar a função json() com a resposta do service', async function () {
      await taskController.getAll(request, response);
      response.json.calledWith(allTasks).should.to.be.true;      
    });

    afterEach(function () {
      taskService.getAll.restore();
    });
  });

  describe('Ao chamar o controller de create', function () {
    describe('Quando é inserido com sucesso', function () {
      const response = {};
      const request = {};
      beforeEach(function () {
        request.body = { name: 'revisar PDI', status: 'pronto' };
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
        response.end = sinon.stub()
          .returns();
  
        sinon.stub(taskService, 'create');
      });
  
      it('Retornar o código de status 201 - CREATE', async function () {
        await taskController.create(request, response);
  
        response.status.calledWith(201).should.to.be.true;
      });
  
      afterEach(function () {
        taskService.create.restore();
      });
    });
  });
});