import { useState } from "react";
import Editor from "react-simple-wysiwyg"
import axios from "axios";

function Write() {
    const [text, setText] = useState('')

    async function saveToDraft(){
        const token = localStorage.getItem('token')
        const response = await axios.post("http://localhost:3000/posts", {title: "Hello World!", content: text}, {
            headers: {
                Authorization: "Bearer "+ token
            }
        })
    }

    return (
    <>
    <Editor value={text} onChange={e=>setText(e.target.value)}/>
    <button onClick={saveToDraft}>save to draft</button>
    </> );
}

export default Write;