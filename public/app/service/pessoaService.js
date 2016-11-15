var daoPessoa = require('../dao/pessoaDAO_2');

// console.log(daoPessoa.findPessoa());

var service = {};

service.findPessoa = (callBack) => {
    return daoPessoa.findPessoa(callBack);
};

// service.findPessoa();

module.exports = service;
