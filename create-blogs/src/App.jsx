import { useEffect } from 'react';
import './App.css'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, [navigate]);
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
