const db = require('./dataBase');
const table_name = 'tb_pessoa';

var dao = {};
dao.findPessoa = (usuario, callBack) => {
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);
        var where = {
            email: usuario.email,
            password: usuario.password
        };

        collection.find(where).toArray(function(err, result) {
            if (err) {
                var msg = 'Ocorreu erro ao recuperar usuário';
                handleError(msg, where);
                callBack(err, result);
            } else if (result.length) {
                callBack(err, result);
            } else {
                var msg = 'Nenhum usuário cadastrado com os parâmetros informado.';
                // + JSON.stringify(usuario)
                handleError(msg, where);
                callBack(err, msg);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        var msg = 'Ocorreu erro ao acessar a base de dados. ';
        handleError(msg, where);
        callBack(err, null);
        dataBase.close();

    });
};

function handleError(error, params) {
    // In a real world app, we might use a remote logging infrastructure
    // console.error(error, params);

}


// console.log(dao.findPessoa());

// var criarUsuario = require('../entity/usuario');
// var usuario = criarUsuario();
//         usuario.login = 'rogerio@cardoso';
//         usuario.password = 'cardoso';


// dao.findPessoa(usuario, (err, result)=>{
//     console.log(err, 'erro');
//     console.log(result, 'result');
// });

module.exports = dao;
