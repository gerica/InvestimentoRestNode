const daoPessoa = require('../dao/pessoaDAO');
const _ 		= require('lodash');
const jwt       = require('jsonwebtoken');

// console.log(daoPessoa.findPessoa());

var service = {};

service.login = (usuario, callBack) => {
    return daoPessoa.findPessoa(usuario, (err, userResult)=> {    	
    	if (err) {
    		callBack(err, null);
    	} else {
    		console.log(userResult);
    		userResult.token = createToken(userResult);
    		callBack(err, userResult);
    	}

    });
};

function createToken(usuario) {
  return jwt.sign(_.omit(usuario, 'password'), config.secret, { expiresInMinutes: 60*5 });
}

// service.findPessoa();

module.exports = service;
