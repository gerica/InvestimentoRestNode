var configUsuarioDAO = require('../dao/configUsuarioDAO');

// console.log(daoPessoa.findPessoa());

var service = {};

service.recuperarConfiguracaoAnalise = (key, callBack) => {
    return configUsuarioDAO.recuperarConfiguracaoAnalise(usuario, callBack);
};

module.exports = service;
