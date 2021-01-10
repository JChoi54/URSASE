const db = require("../db");
const User = require("./User")
const Sequelize = require("sequelize");

let Project = db.sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    projectLink: {
        type: Sequelize.STRING,
        allowNull: false
    },
    featured: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Project.belongsTo(User, {foreignKey: 'fk_user'})

module.exports = Project