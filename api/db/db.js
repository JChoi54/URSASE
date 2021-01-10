let config = require('../db/config');

const {Sequelize} = require("sequelize");

let sequelize = new Sequelize(config.databaseOptions.database, config.databaseOptions.user, config.databaseOptions.password, {
    host: config.databaseOptions.host,
    port: config.databaseOptions.port,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = { sequelize };