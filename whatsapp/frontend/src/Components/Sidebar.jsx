import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {
    return (
        < >
            <div className="sidebar">
                <div className="sidebar_header">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h2>Chat</h2>
                    <h2>Invent</h2>
                </div>
                <div className="sidebar_body">
                    <ul>
                        <li>chatroom-1</li>
                        <li>chatroom-2</li>
                        <li>chatroom-3</li>
                        <li>chatroom-4</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar


