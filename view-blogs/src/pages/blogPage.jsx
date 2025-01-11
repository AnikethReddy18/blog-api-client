import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
                {/* <h2>{blog.author.name}</h2> */}
                <p>{blog.content}</p>
            </div>
            {blog.comments.map((comment, index)=>{
                <div className="comment" key={index}>
                    <h5>{comment.author.username}</h5>
                    <p>{comment.content}</p>
                </div>
            })}
            </>
        ): "Loading post"}
    </div>)
}

export default BlogPage;