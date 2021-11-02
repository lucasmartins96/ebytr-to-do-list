// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

function RequestError(name, message) {
  this.name = name;
  this.message = message || 'Erro interno';
  this.stack = (new Error()).stack;
}
RequestError.prototype = Object.create(RequestError.prototype);
RequestError.prototype.constructor = RequestError;

module.exports = RequestError;
