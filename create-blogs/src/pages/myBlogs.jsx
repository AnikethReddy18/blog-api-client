import { useState, useEffect } from "react";
import apiClient from "../apiClient";
import Blog from "../component/blog";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

function MyBlogs() {
    const [blogs, setBlogs] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate("/login");
      }
    }, [navigate]);

    async function getBlogs(){
        const response = await apiClient.get("/posts/mine", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token') 
            }
        })
        
        setBlogs(response.data)
    }

    useEffect(()=>{
        getBlogs()
    }, [])

    return (
        <>
        <h1>My Blogs</h1>
        {blogs ? (
            <div className="blogs">{blogs.map((blog, index)=><Blog key={index} id={blog.id} title={blog.title} content={blog.content} date={blog.date} isPublished={blog.isPublished}/>)}</div>
        ): "Loading"}
        <Link to="/" className="link">Home</Link>
        </>
    );
}

export default MyBlogs;