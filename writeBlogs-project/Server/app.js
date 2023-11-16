const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/blogs-router');
const Comment = require('./module/comment');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.get('/comments' , async (req,res) => {
    const postComment = await Comment.findAll();

    res.json(postComment);
});

app.post('/comments', async (req,res) => {
    const {userComment} = req.body;

    const postComment = await Comment.create({
        userComment
    });

    res.json(postComment)
})


app.listen(3000);