import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    async function login(e){
        e.preventDefault();
        try{
            const response =  await axios.post("http://localhost:3000/login", 
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const token = response.data.token
            localStorage.setItem("token", token);
            navigate("/")
        }catch(err){
            console.log(err)
        }

    }

    return (
    <form onSubmit={login}>
        <input name="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
        <input name="password" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button>login</button>
    </form>);
}

export default Login;