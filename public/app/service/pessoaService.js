var daoPessoa = require('../dao/pessoaDAO');

// console.log(daoPessoa.findPessoa());

var service = {};

service.findPessoa = (callBack) => {
    return daoPessoa.findPessoa(callBack);
};

// service.findPessoa();

module.exports = service;
