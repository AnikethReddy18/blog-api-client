import { useState } from "react";
import apiClient from "../apiClient";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erros, setErros] = useState(null)

    const navigate = useNavigate()
    async function signup(e){
        e.preventDefault();
        try{
            await apiClient.post("/signup", 
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const response =  await apiClient.post("/login", 
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
            const erros = err.response.data.erros.map((err)=>err.msg);
            setErros(erros)
        }

    }

    return (
    <form onSubmit={signup}>
   <input name="username" placeholder="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
   <input name="password" placeholder="password" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button>Signup</button>
        {erros && erros.map((err, index)=><div className="erros" key={index}>{err}</div>)}
    </form>);
}

export default Signup;