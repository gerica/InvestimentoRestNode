//lets require/import the mongodb native drivers.
const mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const mongoClient = mongodb.MongoClient;
const db_name = 'carteiraInvestimentoDB';

// Connection URL. This is where your mongodb server is running.
const url = 'mongodb://localhost:27017/' + db_name;

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

const db = {
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
