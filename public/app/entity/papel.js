var criarPapel = function() {
    var _key;
    var _nome;
    var _papel;
    var _setor;
    var _ativo = false;
    var _rank;

    return {
        key: _key,
        nome: _nome,
        papel: _papel,
        setor: _setor,
        ativo: _ativo,
        rank: _rank,


    };
};


// var obj = criarPapel();
// obj.nome = 'HGTX3';
// console.log(obj);


module.exports = criarPapel;
