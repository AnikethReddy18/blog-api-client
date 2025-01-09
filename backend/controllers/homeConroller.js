import { makePost, uploadPost, getPost, getAllPosts } from "../db/queries.js"

export async function getHome(req, res){
    const posts = await getAllPosts();
    res.json(posts)
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
