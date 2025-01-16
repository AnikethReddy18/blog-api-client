import { useEffect } from 'react';
import './App.css'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title="Blog Maker"

    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, [navigate]);

  function signout(){
    localStorage.removeItem("token");
    window.location.reload()
  }

  return (<>
  <h1>What would like to do?</h1>
  <div className="options">
    <Link to="/write" className='link'>Write</Link>
    <br />
    <Link to="/my-blogs" className='link'>My Blogs</Link>
    <button onClick={signout}>Signout</button>
    </div >
    </>
  );
}
export default App
