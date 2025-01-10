import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState(null)
  
  async function getPosts(){
    const response = await fetch("http://localhost:3000")
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
          {posts.map((post, index)=>(<li key={index}>{post.title}</li>))}
        </ul>
      ): "loading"}
    </>
  )
}

export default App
