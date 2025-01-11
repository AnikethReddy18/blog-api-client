import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    async function signup(e){
        e.preventDefault();
        try{
             await axios.post("http://localhost:3000/signup", 
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            navigate("/login")
        }catch(err){
            console.log(err)
            window.location.reload()
        }

    }

    return (
    <form onSubmit={signup}>
        <input name="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
        <input name="password" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button>Signup</button>
    </form>);
}

export default Signup;