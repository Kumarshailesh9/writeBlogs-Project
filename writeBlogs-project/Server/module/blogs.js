const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const blogs = sequelize.define('blog' , {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content:  {
        type: Sequelize.STRING,
        allowNull:  false
    }
});

blogs   
    .sync()
    .then(res => {
        console.log('Table created!');
    })
    .catch(err => {
        console.log(err);
    })


module.exports = blogs;