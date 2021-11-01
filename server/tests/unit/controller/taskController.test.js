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
});