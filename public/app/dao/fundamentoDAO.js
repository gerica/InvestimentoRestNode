var db = require('./dataBase');

var dao = {};
dao.save = (fundamento, callBack) => {
    // console.log(request);
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection('fundamento');

        // Insert some users
        collection.insert(fundamento, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                callBack(err, result);
            }

            //Close connection
            db.close();
        });


    }).catch((err) => {
        console.log(err);
        dataBase.close();

    });
};

// console.log(dao.findPessoa());

module.exports = dao;
