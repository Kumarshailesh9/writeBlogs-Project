const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/blogs-router');
const commentRouter = require('./router/comment-router');
const sequelize = require('./util/database');
const blogs = require('./module/blogs');
const comment = require('./module/comment');



const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.use(commentRouter);

comment.belongsTo(blogs, {constraints: true , onDelete: 'CASCADE'});
blogs.hasMany(comment);

sequelize
    //.sync({force:true})
    .sync()
    .then(res => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
