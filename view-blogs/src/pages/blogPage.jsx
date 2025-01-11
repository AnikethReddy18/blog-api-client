import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "../components/comment";

function BlogPage() {
    const {id} = useParams() 
    const [blog, setBlog] = useState(null);

    async function getBlog(){
        const response = await fetch("http://localhost:3000/posts/"+id);
        const blogObject = await response.json()
        setBlog(blogObject);
    }

    useEffect(() => {
        getBlog()
    }, []);

    return (
    <div>
        {blog ? (
            <>
            <div className="blogPage">
                <h1>{blog.title}</h1>
                <h2>{blog.author.username}</h2>
                <p>{blog.content}</p>
            </div>

            <div className="comments">
            {blog.comments.map((comment, index)=>{
                return <Comment author={comment.author} content={comment.content} key={index} />
            })}
            </div>

            
            </>
        ): "Loading post"}
    </div>)
}

export default BlogPage;