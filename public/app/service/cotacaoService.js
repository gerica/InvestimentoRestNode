var cotacaoDAO = require('../dao/cotacaoDAO');

// console.log(daoPessoa.findPessoa());

var service = {};

service.findByKey = (key, callBack) => {
    return cotacaoDAO.findByKey(key, callBack);
};
service.findByPapel = (papel, callBack) => {
    return cotacaoDAO.findByPapel(papel, callBack);
};
service.findAll = (callBack) => {
    return cotacaoDAO.findAll(callBack);
};
service.inserirPapel = (papeis, callBack) => {
    return cotacaoDAO.inserirPapel(papeis, callBack);
};
service.ativarDesativar = (papel, callBack) => {
    return cotacaoDAO.ativarDesativar(papel, callBack);
};

// service.findByAtivo(true, (err, result) => {
//     console.log(result);
// });

// service.findAll((err, result) => {
//     console.log(result.fundamentos);
// });
// service.findByPapel('hgtx3', (err, result) => {
//     console.log(result);
// });
// service.findAll((err, result) => {
//     console.log(result.fundamentos);
// });
// service.findByKey(115,(err, result) => {
//     console.log(result);
// });

// var papeis = [];
// const criarPapel = require('../entity/papel');
// var papel1 = criarPapel();
// papel1.nome = 'Petrobras';
// papel1.ativo = true;

// papeis.push(papel1);

// service.inserirPapel(papeis, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('sucesso', result);
//     }
// });

module.exports = service;
