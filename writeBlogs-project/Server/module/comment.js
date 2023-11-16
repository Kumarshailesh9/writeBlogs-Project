const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Comment = sequelize.define('comment' , {
    userComment:  {
        type: Sequelize.STRING,
        allowNull: false
    }
});
Comment
    .sync()
    .then(res => {
        console.log('Comment table also Created!');
    })
    .catch(err => {
        console.log(err);
    })

module.exports = Comment;