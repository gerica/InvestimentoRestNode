var db = require('./dataBase');

var dao = {};
dao.findPessoa = (usuario, callBack) => {
    // console.log(request);
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection('pessoa');
        console.log('------------');
        var where ={
            login: usuario.login,
            password: usuario.password
        };
        console.log(where);
        console.log('------------');

        collection.find(where).toArray(function(err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                // console.log('Found:', result);
                callBack(err, result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        console.log(err);
        dataBase.close();

    });
};

// console.log(dao.findPessoa());

// var criarUsuario = require('../entity/usuario');
// var usuario = criarUsuario();
//         usuario.login = 'rogerio';
//         usuario.password = 'cardoso';


// dao.findPessoa(usuario, (err, result)=>{
//     console.log(err, 'erro');
//     console.log(result, 'result');
// });

module.exports = dao;
