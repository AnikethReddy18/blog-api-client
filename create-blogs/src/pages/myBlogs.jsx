import { useState, useEffect } from "react";
import axios from "axios"
import Blog from "../component/blog";
import {useNavigate} from "react-router-dom"

function MyBlogs() {
    const [blogs, setBlogs] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate("/login");
      }
    }, [navigate]);

    async function getBlogs(){
        const response = await axios.get("http://localhost:3000/posts/mine", {
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
        {blogs ? (
            <>{blogs.map((blog, index)=><Blog key={index} id={blog.id} title={blog.title} content={blog.content} date={blog.date} isPublished={blog.isPublished}/>)}</>
        ): "Loading"}
        </>
    );
}

export default MyBlogs;