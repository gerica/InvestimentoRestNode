const db = require('./dataBase');
const papelDAO = require('./papelDAO');
const table_name = 'tb_fundamento';

var dao = {};
dao.save = (fundamento, callBack) => {
    // console.log(request);
    var dataBase = null;
    db.open().then((db) => {
        dataBase = db;
        var collection = db.collection(table_name);

        var count = 1;
        var papeis = [];
        fundamento.forEach((e) => {
            e.key = count;
            e.papel.key = count++;
            papeis.push(e.papel);
            e.key_papel = e.papel.key;
            delete(e.papel);
        });
        // console.log(papeis);

        // Insert some users
        collection.insert(fundamento, (err, result) => {
            if (err) {
                console.log(err);
                db.close();
            } else {
                // callBack(err, result);
                papelDAO.inserirPapel(papeis, (err, result) => {
                    
                    collection.aggregate([{
                        $lookup: {
                            from: "tb_papel",
                            localField: "key",
                            foreignField: "key_papel",
                            as: "fundamentos"
                        }
                    }]);

                    
                    db.close();
                    callBack(err, result);
                })
            }
            //Close connection

        });



    }).catch((err) => {
        console.log(err);
        dataBase.close();

    });
};

// console.log(dao.findPessoa());

module.exports = dao;
