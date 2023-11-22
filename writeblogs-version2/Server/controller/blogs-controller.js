const blogs = require('../module/blogs');

exports.getBlogs = async (req,res) => {

    const blogData = await blogs.findAll();
    
    res.json(blogData);
    
};

exports.postBlogs = async (req,res) => {
    const {title , author, content} = req.body;

    const blogData = await blogs.create({
        title,
        author,
        content
    });

    res.json(blogData);
}