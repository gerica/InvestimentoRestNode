const daoPessoa 	= require('../dao/pessoaDAO');
const _	        	= require('lodash');    
const jwt     		= require('jsonwebtoken');
const configToken   = require('./configToken');

// console.log(daoPessoa.findPessoa());
var service = {};

service.findPessoa = (usuario, callBack) => {
    return daoPessoa.findPessoa(usuario, callBack);
};

module.exports = service;
