var criarPapel = require('./papel');

var criarCotacao = function() {
    var _id;
    var _data;
    var _abertura;
    var _maxima;
    var _minima;
    var _fechamento;

    return {
        id: _id,
        data: _data,
        abertura: _abertura,
        maxima: _maxima,
        minima: _minima,
        fechamento: _fechamento,
        papel: criarPapel()

    }
}

var obj = criarCotacao();
console.log(obj);

module.exports = criarCotacao;
