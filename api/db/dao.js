const mysql = require('mysql')
let connection

module.exports = {
    connectDatabase : function() {
        let config = require('../db/config');
        connection = mysql.createConnection(config.databaseOptions);
        return connection
    },

    queryDatabase : function(queryString) {
        if(connection === null) {
            this.connectDatabase()
        }

        connection.query(queryString, function (error, results, fields) {
            if (error) throw error;
            return results[0]
        });
    }
}