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
    },
    graduationYear: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    isAlumni: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        default: false
    },
    major: {
        type: Sequelize.STRING,
        allowNull: true
    },
    minor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mainstudy: {
        type: Sequelize.STRING,
        allowNull: true
    },
    biography: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
        default: "images/default.jpg"
    },
    coverImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    linkedInURL: {
        type: Sequelize.STRING,
        allowNull: true
    },
    facebookURL: {
        type: Sequelize.STRING,
        allowNull: true
    },
    instagramURL: {
        type: Sequelize.STRING,
        allowNull: true
    },
    websiteURL: {
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

User.prototype.isCompleteProfile = function () {
    if (this.graduationYear !== null && this.major !== null && this.mainstudy !== null) {
        return true // TODO: Add more verification checks to see if the profile is complete.
    }
    return false
}

User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
}

module.exports = User