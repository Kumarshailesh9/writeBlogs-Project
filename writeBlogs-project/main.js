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
        .post('https://crudcrud.com/api/c3884c1f17634b55b14ddd6ef425fd9a/blogs', blogData)
        .then(res => {
            showblogs(res.data);
        })
        .catch(err => {
            console.log(err);
        })
};

addEventListener('DOMContentLoaded', () => {
    axios
        .get('https://crudcrud.com/api/c3884c1f17634b55b14ddd6ef425fd9a/blogs')
        .then(res => {
            console.log(res);
            for(let i=0; i<res.data.length; i++){
                showblogs(res.data[i]);
            }
        })
        .catch(err => {
            console.log(err);
        })
});

function showblogs(blogs){
                    const pNode = document.getElementById('items');
                    const cNode = `<li class="list-group-item">${blogs.title} -- ${blogs.author} -- ${blogs.content}
                    <input type="text" class="form-control" id="commentInput${blogs._id}">
                    <button type="button" class="btn btn-primary" onclick="postComment('${blogs._id}')">Comment</button>
                    <ul id="commentList${blogs._id}" class="list-group mt-2"></ul>    
                </li>`;
    pNode.innerHTML = pNode.innerHTML+cNode;
};

function postComment(blogId){
    const commentInput = document.getElementById(`commentInput${blogId}`);
    const input = commentInput.value;
    const parentList = document.getElementById(`commentList${blogId}`);
    const childList = `<li class="list-group-item">${input}
                        <button type="button" class="btn btn-danger" onclick="commentDelete(this)">Delete</button>
                    </li>`;

    parentList.innerHTML = parentList.innerHTML+childList;
        const inputData = {
            input
        };
    axios
        .post('http://localhost:3000/comments', inputData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

}


