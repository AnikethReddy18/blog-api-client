import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/post'
import {Link} from "react-router-dom"
import apiClient from "./apiClient"

function App() {
  const [posts, setPosts] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);

  async function getPosts() {
    const response = await apiClient.get("/posts")
    const data = await response.body
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(()=>{

    document.title = "View Blogs"
    if(localStorage.getItem('token')){
      setLoggedIn(true)
    }else[
      setLoggedIn(false)
    ]
  }, [])


  function handleLogout(){
    localStorage.removeItem('token');
    window.location.reload()
  }

  return (
    <>
     <nav className="navbar">
        <h1>Daily Blogs!</h1>
        {!loggedIn ? (
          <div>
            <Link to="/login" className='link'>Login</Link>
            <Link to="/signup" className='link'>Signup</Link>
          </div>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
      {posts ? (
        <div className="posts">
         { posts.map((post, index) =>
          <Post title={post.title} content={post.content} date={post.date} id={post.id} key={index} />)}
        </div>
      ) : "Loading Posts"}
    </>
  )
}

export default App
