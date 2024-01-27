import React, { useState, useEffect } from 'react';
import './Chat.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from "../axios";


function Chat() {
    const [userdata, setUserdata] = useState();
    const [users, setUsers] = useState([]);
   
    let name, value;
    const HandleInput = async (e) => {
        name = e.target.name;
        value = e.target.value;
        setMessages({ ...messages, [name]: value });
    };
   
    const getData = async () => {
        const res = await axios.get("/getdata");
        setUsers(res);
    };
    const Userdata = async (e) => {
        const data = await axios.get("/getdata");
        if (data.status === 200) {
            setUserdata(data.name);
        }
    }

    useEffect(() => {
        getData();
        Userdata();
    }, []);

    const [messages, setMessages] = useState({
        name: "admin", message: ""
    });

    const post = async (e) => {
        e.preventDefault();
        const res = await axios.patch("/postmsg", messages);
        if (res.status === 200) {
            alert(res.json());
        }

    };
    return (
        <>
            <div className="chat">
                <div className="chat_header">
                    <h2>Chatroom-1</h2>
                </div>
                <div className="container">
                    <div className="chat_body">
                        <ul>
                            {users.map((user) => {
                                return <li key={user._id}>{user.messages}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="chat_form">
                    <form method='patch'>
                        <input type="text" name='message' onChange={HandleInput} value={messages.message} placeholder="Enter the Text" />
                        <Button onClick={post} className='button' variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Chat



