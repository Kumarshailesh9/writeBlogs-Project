const express = require('express');
const myController = require('../controller/blogs-controller');

const router = express.Router();
router.get('/blogs' , myController.getBlogs);

router.post('/blogs', myController.postBlogs );

module.exports = router;