//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var mongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/mongodb-tutorial-db';

function open() {

    // Connection URL. This is where your mongodb server is running.
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the Server
        mongoClient.connect(url, (err, db) => {
            if (err) {
                // console.log('err');
                reject(err);
            } else {
                // console.log('db');
                resolve(db);
            }
        });
    });
}

var db = {
    open: open,
    close: close
};


function close(db) {
    //Close connection
    if (db) {
        db.close();
    }
}

module.exports = db;
