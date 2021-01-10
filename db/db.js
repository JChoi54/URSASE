const {Sequelize} = require("sequelize");

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});

module.exports = { sequelize };