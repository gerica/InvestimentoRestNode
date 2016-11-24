const daoPessoa = require('../dao/pessoaDAO');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('./config');

var service = {};

service.login = (usuario, callBack) => {
    return daoPessoa.findPessoa(usuario, (err, result) => {
        console.log(result);
        if (err) {
            callBack(err, null);
        } else if (result.length === 1) {
            result[0].token = createToken(result[0]);
            callBack(err, result);
        } else {
            callBack(err, result);
        }

    });
};

function createToken(usuario) {
    return jwt.sign(_.omit(usuario, 'password'), config.secret, { expiresIn: '1h' });
}


// var criarUsuario = require('../entity/usuario');
// var usuario = criarUsuario();
// usuario.email = 'rogerio@cardoso.com.br';
// usuario.password = 'cardoso';


// service.login(usuario, (err, result) => {
//     console.log(err, 'erro');
//     console.log(result, 'result');
// });




module.exports = service;
