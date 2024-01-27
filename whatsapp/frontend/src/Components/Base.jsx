import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import './Base.css';

function Base() {
  return (
    <>
    <div className='base'>
        <Sidebar/>
        <Chat/>
    </div>
    </>
  )
}

export default Base