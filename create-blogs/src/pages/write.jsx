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
        const response = await axios.post("http://localhost:3000/posts", {title: document.getElementById('titleInput').value, content: text}, {
            headers: {
                Authorization: "Bearer "+ token
            }
        })

        if(response.status == 200){
            navigate("/my-blogs")
        }
    }

    return (
    <>
    <input type="text" id="titleInput"/>
    <Editor value={text} onChange={e=>setText(e.target.value)}/>
    <button onClick={saveToDraft}>save to draft</button>
    </> );
}

export default Write;