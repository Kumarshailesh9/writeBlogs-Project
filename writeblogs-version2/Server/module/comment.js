const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Comment = sequelize.define('comment' , {
    userComment:  {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Comment;