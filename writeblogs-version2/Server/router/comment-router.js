const express = require('express');
const commentController = require('../controller/comment-controller');

const commentRouter = express.Router();

commentRouter.get('/comments' , commentController.getComment);

commentRouter.post('/comments', commentController.postComment);

commentRouter.delete('/comments/:id', commentController.deleteComment);

module.exports = commentRouter;