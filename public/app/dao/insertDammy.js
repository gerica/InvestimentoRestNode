var db = require('./dataBase');
var criarUsuario = require('../entity/usuario');

var dao = {};
dao.insert = () => {
    // console.log(request);
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection('pessoa');
        // console.log(collection);
         //HURRAY!! We are connected. :)    

        var usuario = criarUsuario();
        usuario.login = 'rogerio@cardoso';
        usuario.password = 'cardoso';

        // Insert some users
        collection.insert([usuario], function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
          }
          //Close connection
          db.close();
        });


    }).catch((err) => {
        console.log(err);
        dataBase.close();

    });
};

dao.insert();
