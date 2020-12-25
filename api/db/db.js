const mysql = require('mysql')
let config = require('../db/config');
let connection = mysql.createConnection(config.databaseOptions);

connection.connect(function(err) {
    if (err) throw err;
    console.log("[Database] Connection Successful.")
});

module.exports = connection;