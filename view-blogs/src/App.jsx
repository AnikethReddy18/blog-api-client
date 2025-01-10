import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/post'

function App() {
  const [posts, setPosts] = useState(null)
  
  async function getPosts(){
    const response = await fetch("http://localhost:3000/posts")
    const data = await response.json()
    setPosts(data)
  }

  useEffect(()=>{
    getPosts()
  }, [])

  return (
    <>
      {posts ? (
        <ul>
          {posts.map((post, index)=><Post title={post.title} content={post.content} date={post.date} key={index}/>)}
        </ul>
      ): "loading"}
    </>
  )
}

export default App
