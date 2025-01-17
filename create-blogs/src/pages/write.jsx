import { useState, useEffect } from "react";
import Editor from "react-simple-wysiwyg"
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Write() {
    const [text, setText] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate("/login");
      }
    }, [navigate]);

    async function saveToDraft(){
        const token = localStorage.getItem('token')
        const response = await axios.post(process.env.URL+"/posts", {title: document.getElementById('titleInput').value, content: text}, {
            headers: {
                Authorization: "Bearer "+ token
            }
        })

        if(response.status == 200){
            navigate("/my-blogs")
        }
    }

    return (
    <div className="writePage">
    <input type="text" placeholder="Title" id="titleInput"/>
    <h1 id="contentH1">Content:</h1>
    <Editor value={text} onChange={e=>setText(e.target.value)}/>
    <button onClick={saveToDraft} id="submitBlogButton">save to draft</button>
    </div> );
}

export default Write;