function addBlog(e){
    e.preventDefault();
    const title = e.target.blogTitle.value;
    const author = e.target.blogAuthor.value;
    const content = e.target.blogContent.value;

    const blogData = {
        title,
        author,
        content
    };
    
    axios
        .post('http://localhost:3000/blogs', blogData)
        .then(res => {
            showBlogs(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
addEventListener('DOMContentLoaded', () => {
    axios
        .get('http://localhost:3000/blogs')
        .then(res => {
            for(let i=0; i<res.data.length; i++){
                showBlogs(res.data[i]);
            }
        })
        .catch(err => {
            console.log(err);
        })
});

function showBlogs(blogs){
    document.getElementById('blogTitle').value = "";
    document.getElementById('blogAuthor').value = "";
    document.getElementById('blogContent').value = "";
    const parentNode = document.getElementById('blogsList');
    const childNode = `<li>${blogs.title}----${blogs.author}----${blogs.content}
                       <input type="text" id="comment-${blogs.id}"> 
                       <button type="button" onclick="blogComment('${blogs.id}',  document.getElementById('comment-${blogs.id}').value)">Comment</button>
                       <ul id="commentList-${blogs.id}"></ul>
                       </li>`;

    parentNode.innerHTML = parentNode.innerHTML+childNode;
};

function blogComment(blogId, userComment){
    const commentData = {
        userComment,
        blogId
    };

    axios
        .post('http://localhost:3000/comments', commentData)
        .then(res => {
           // console.log(blogId,res.data);
            showComments(blogId, res.data);
        })
        .catch(err => {
            console.log(err);
        })
};
addEventListener('DOMContentLoaded', () => {
    axios
    .get('http://localhost:3000/comments')
    .then(res => {
        //console.log(res.data);
        for(let i=0; i<res.data.length; i++){
            showComments(res.data[i].blogId, res.data[i]);
        }
    })
    .catch(err => {
        console.log(err);
    });

});


function showComments(blogId, comment){
    //console.log(blogId,comment);
    document.getElementById(`comment-${blogId}`).value = "";
    const commentId = comment.id;
    const pNode = document.getElementById(`commentList-${blogId}`);
    const cNode = `<li id="comment-${commentId}">${comment.userComment}
                    <button type="button" onclick="deleteComment('${blogId}','${commentId}')">X</button>
                    </li>`;

    pNode.innerHTML = pNode.innerHTML + cNode;
}




function deleteComment(blogId , commentId){
    //console.log(blogId,commentId);
    const pn = document.getElementById(`commentList-${blogId}`);
    const commentToDelete = document.getElementById(`comment-${commentId}`);

    axios
        .delete(`http://localhost:3000/comments/${commentId}`)
        .then(res => {
            pn.removeChild(commentToDelete);
        })
        .catch(err => {
            console.log(err);
        })
}