import { makePost, uploadPost, getPost, getAllPosts, postComment, getUploadedPost, getPostsByUser } from "../db/queries.js"

export async function getHome(req, res){
    res.send("Hello World!")
}

export async function getPostsController(req, res){
    const posts = await getAllPosts();
    res.json(posts)
}

export async function getPostController(req, res){
    const post = await getUploadedPost(parseInt(req.params.postId));
    res.json(post)
}

export async function newPostController(req, res){
    const {title, content} = req.body;
    await makePost(title, content, req.user.id)
    res.redirect("/")
}

export async function uploadPostController(req, res){
    const postId = parseInt(req.params.postId);
    const {id} = await getPost(postId);
    if( id !== postId) return res.sendStatus(403)

    await uploadPost(postId)
    res.redirect("/")
}

export async function postCommentController(req, res){
    await postComment(req.body.content, parseInt(req.params.postId), req.user.id);
    res.redirect("/")
}

export async function getCommentsController(req, res){
    const comments = await getComments(parseInt(req.params.postId))
    res.json(comments)
}

export async function getPostsByUserController(req, res){
    const userId = parseInt(req.params.userId);
    if(userId !== req.user.id) return res.sendStatus(403)

    const posts = await getPostsByUser(userId);
    res.json(posts)
}