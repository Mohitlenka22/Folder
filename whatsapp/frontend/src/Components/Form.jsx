import React, { useState } from 'react';
import axios from '../axios.js';

function Form() {
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

    let name, value;
    const HandleInputs = async (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(user);
    }
    const postdata = async (e) => {
        e.preventDefault();
        const res = await axios.post("/register", user);
        if (res.status === 200) {
            alert(user);
        }
    }
    return (
        <>
            <form method='POST'>
                <input type="text" name='name' value={user.name} onChange={HandleInputs} placeholder='name' /><br />
                <input type="email" name='email' value={user.email} onChange={HandleInputs} placeholder='email' /><br />
                <input type="password" name='password' value={user.password} onChange={HandleInputs} placeholder='password' /><br />
                <input type="password" name='cpassword' value={user.cpassword} onChange={HandleInputs} placeholder='cpassword' /><br />
                <input type="submit" onClick={postdata} />
            </form>


        </>
    )
}

export default Form