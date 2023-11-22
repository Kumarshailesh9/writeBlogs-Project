const Sequelize = require('sequelize');

const sequelize = new Sequelize('shailesh' , 'root', 'Realme123' , {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;