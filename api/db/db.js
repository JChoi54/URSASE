/*const mysql = require('mysql2')
let config = require('../db/config');
let connection = mysql.createConnection(config.databaseOptions);

connection.connect(function(err) {
    if (err)
    {
        console.log("[Database] Connection failed, check if database server is on.")
        process.exit(1)
    }
    else
    {
        console.log("[Database] Connection Successful.")
    }
});*/

const {Sequelize} = require("sequelize");

/*let sequelize = new Sequelize(config.databaseOptions.database, config.databaseOptions.user, config.databaseOptions.password, {
    host: config.databaseOptions.host,
    port: config.databaseOptions.port,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});*/

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});

let connection = null

module.exports = { connection, sequelize };