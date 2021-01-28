let config = require('../config');

const {Sequelize} = require("sequelize");

let sequelize = new Sequelize(config.application.databaseOptions.database, config.application.databaseOptions.user, config.application.databaseOptions.password, {
    host: config.application.databaseOptions.host,
    port: config.application.databaseOptions.port,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = {sequelize};