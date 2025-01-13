import axios from "axios"
import { useEffect, useState } from "react";

function AddComment(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            setIsLoggedIn(false)
        }else{
            setIsLoggedIn(true)
        }
    }, [])

    async function submitComment(){
        const res = await axios.post("http://localhost:3000/"+ props.postId + "/comments", {
            content: document.getElementById("comment").value 
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        window.location.reload()
    }

    if(!isLoggedIn){
        return <>Please Log in to comment</>
    }

    return (
    <div className="addComment">
        <textarea name="comment" id="comment"></textarea>
        <button onClick={submitComment}>comment</button>
    </div> );
}

export default AddComment;