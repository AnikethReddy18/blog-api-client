import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createNewUser(username, password){
    await prisma.users.create({
        data:{
            username, password
        }
    })
}

export async function getUser(username){
    const user = await prisma.users.findFirst({
        where:{
            username
        }
    })

    return user;
}

export async function makePost(title, content, authorId){
    await prisma.post.create({
        data:{
            title, content, authorId
        }
    })
}

export async function uploadPost(postId){
    await prisma.post.update({
        where:{
            id: postId
        },
        data:{
            isPublished: true
        }
    })
}

export async function getUploadedPost(id){
    const post = await prisma.post.findFirst({
        where:{
            id,
            isPublished: true
        },
        include:{
            comments: {
                include:{
                    author: true
                }
            },
            author: true
        }
    })

    return post
}

export async function getPost(id){
    const post = await prisma.post.findUnique({
        where:{
            id,
        }
    })

    return post
}

export async function getAllPosts(){
    const posts = await prisma.post.findMany({
        where:{
            isPublished: true
        }
    })
    return posts
}

export async function postComment(content, postId, authorId){
    await prisma.comment.create({
        data:{
            content, authorId, postId
        }
    })
}

export async function getPostsByUser(userId){
    await prisma.post.findMany({
        where:{
            authorId: userId
        }
    })
}

