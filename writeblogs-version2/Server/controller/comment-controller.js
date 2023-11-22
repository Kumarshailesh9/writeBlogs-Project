const Comment = require('../module/comment');

exports.getComment = async (req,res) => {
    const postComment = await Comment.findAll();

    res.json(postComment);
};


exports.postComment = async (req,res) => {
    const { userComment, blogId} = req.body;

    const postComment = await Comment.create({
        userComment,
        blogId
    });

    res.json(postComment)
};


exports.deleteComment = async (req, res) => {
    const id = req.params.id;
    try {
        const comment = await Comment.findByPk(id);
        if(!comment){
            return res.status(404).json({error: 'Comment not found'});
        }
        await comment.destroy();
        res.json({message: 'Comment deleted Succesfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed To delete comment'});
    }
    
};