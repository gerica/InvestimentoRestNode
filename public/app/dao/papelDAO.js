const db = require('./dataBase');
const table_name = 'tb_papel';

var dao = {};

dao.findByKey = (key, callBack) => {

    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);
        var where = {
            key: key
        };

        collection.find(where).toArray(function(err, result) {
            if (err) {
                handleError(err);
            } else if (result.length) {
                callBack(err, result);
            } else {
                handleError('No document(s) found with defined "find" criteria!', where);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

dao.findByPapel = (papel, callBack) => {

    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);
        var where = {
            papel: papel
        };

        collection.find(where).toArray(function(err, result) {
            if (err) {
                handleError(err);
            } else if (result.length) {
                callBack(err, result);
            } else {
                handleError('No document(s) found with defined "find" criteria!', where);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

dao.findByAtivo = (ativo, callBack) => {
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);
        var where = {
            ativo: ativo
        };

        collection.find(where).toArray(function(err, result) {
            if (err) {
                handleError(err);
            } else if (result.length) {
                callBack(err, result);
            } else {
                handleError('No document(s) found with defined "find" criteria!', where);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

dao.findAll = (callBack) => {
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);

        collection.find().toArray(function(err, result) {
            if (err) {
                handleError(err);
            } else if (result.length) {
                callBack(err, result);
            } else {
                handleError('No document(s) found with defined "find" criteria!', where);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

/**
 * Função para inserir os papeis
 * params: papeis - array de papeis
 *         callBack - função que será executada ao termino da inserção        
 */
dao.inserirPapel = (papeis, callBack) => {
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);

        // Insert
        collection.insert(papeis, function(err, result) {
            callBack(err, result)

            //Close connection
            dataBase.close();
        });

    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

dao.ativarDesativar = (papel, callBack) => {
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);

        // Insert
        collection.findOneAndUpdate({ _id: papel._id }, { $set: { ativo: !papel.ativo } }, function(err, result) {
            callBack(err, result)

            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

// private extractData( res: Response ) {
//     return res.json();
// }
function handleError(error, params) {
    // In a real world app, we might use a remote logging infrastructure
    console.error(error, params);

}


function criateDammy() {


    var papeis = [];
    var papel1 = criarPapel();
    papel1.nome = 'Hering';
    papel1.ativo = true;

    var papel2 = criarPapel();
    papel2.nome = 'Ambev';
    papeis.push(papel1);
    papeis.push(papel2);

    dao.inserirPapel(papeis, (err, result) => {
        if (err) {
            handleError(err);
        } else {
            console.log('sucesso', result.length);
        }
    });
}

function findDammy() {
    dao.findByAtivo(false, (err, result) => {
        if (err) {
            console.err(err);
        } else {
            console.log(result);
            if (result.length > 0) {
                dao.ativarDesativar(result[0], (err, result) => {
                    console.log(result);
                });

            }

            // console.log(result);
        }
    })
}

function findAllDammy() {
    dao.findAll((err, result) => {
        if (err) {
            console.err(err);
        } else {
            console.log(result);
        }
    })
}


// criateDammy();
// findDammy();
// findAllDammy();

// dao.findByKey(850,(err, result)=>{
//     console.log(result);
// })

module.exports = dao;
