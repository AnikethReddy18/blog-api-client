import { useState, useEffect } from 'react'
import './App.css'
import {Link} from "react-router-dom"

function App() {
  return (
  <>
    <h1>What would like to do?</h1>
    <Link to="/write">Write</Link>
    <br />
    <Link to="/my-blogs">My Blogs</Link>
    </>
  );
}
export default App
