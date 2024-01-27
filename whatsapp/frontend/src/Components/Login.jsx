import axios from '../axios.js';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",password:""
  });
  let name,value;
  const handleinput = async(e)=>{
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value});
  } 
  const post = async(e)=>{
    e.preventDefault();
    const resp =  await axios.post("/login",user);
    if(resp.status === 200)
    {
        alert("success..");
        navigate("/");
    }
    else{
      alert("nsj");
    }
  }
  return (
    <div>
        <form method='POST'>
                <input type="email" name='email' onChange={handleinput} value={user.email}/><br />
                <input type="password" name='password' onChange={handleinput} value={user.password}/><br />
                <input type="submit" onClick={post} />
        </form>


    </div>
  )
}

export default Login