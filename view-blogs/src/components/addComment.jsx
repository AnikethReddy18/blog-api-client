import apiClient from "../apiClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

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
        const res = await apiClient.post("/"+ props.postId + "/comments", {
            content: document.getElementById("comment").value 
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        window.location.reload()
    }

    if(!isLoggedIn){
        return <Link to='/login'><h1 id="loginHeader">Please Log in to comment</h1></Link>
    }

    return (
    <div className="addComment">
        <textarea name="comment" id="comment" placeholder="comment"></textarea>
        <button onClick={submitComment}>comment</button>
    </div> );
}

export default AddComment;