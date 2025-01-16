import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erros, setErros] = useState(null)

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
            const erros = err.response.data.erros.map((err)=>err.msg);
            setErros(erros)
        }

    }

    return (
    <form onSubmit={signup}>
        <input name="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
        <input name="password" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button>Signup</button>
        {erros && erros.map(err=><div style={{color: "red"}}>{err}</div>)}
    </form>);
}

export default Signup;