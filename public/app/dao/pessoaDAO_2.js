var db = require('./dataBase');

var dao = {};
dao.findPessoa = (callBack) => {
    // console.log(request);
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection('pessoas');

        collection.find().toArray(function(err, result) {
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

module.exports = dao;
