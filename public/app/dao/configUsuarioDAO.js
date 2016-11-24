const db = require('./dataBase');
const table_name = 'tb_config_usuario';

var dao = {};

dao.recuperarConfiguracaoAnalise = (usuario, callBack) => {

    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);
        var where = {
            id_usuario: usuario.id
        };

        collection.find(where).toArray(function(err, result) {
            if (err) {
                handleError(err);
                callBack(err, result);
            } else if (result.length) {
                callBack(err, result);
            } else {
                var msg = 'No document(s) found with defined "find" criteria!';
                handleError(msg, where);
                callBack(err, msg);
            }
            //Close connection
            dataBase.close();
        });


    }).catch((err) => {
        handleError(err);
        dataBase.close();

    });
};

function handleError(error, params) {
    // In a real world app, we might use a remote logging infrastructure
    console.error(error, params);

}


module.exports = dao;
