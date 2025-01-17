import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "../components/comment";
import AddComment from "../components/addComment";
import apiClient from "../apiClient";

function BlogPage() {
    const {id} = useParams() 
    const [blog, setBlog] = useState(null);

    async function getBlog(){
        const response = await apiClient.get("/posts/"+id);
        const blogObject = await response.body;
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
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>

            <div className="comments">
            {blog.comments.length == 0 ?  <>No Comments</>
            : blog.comments.map((comment, index)=>{
                return <Comment author={comment.author} content={comment.content} key={index} />
            })}
            </div>
            <AddComment postId={blog.id}/>
            </>
        ): "Loading post"}
    </div>)
}

export default BlogPage;