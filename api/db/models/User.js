const db = require("../db");
const Sequelize = require("sequelize");
const bcrypt = require('bcrypt')

let User = db.sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    verifytoken: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

User.prototype.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, result) {
        if (err) return callback(err, false);
        return callback(err, result)
    });
}

module.exports = User