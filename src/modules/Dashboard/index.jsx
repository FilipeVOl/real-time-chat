import React from 'react'
import Chat from './chat'
import './Dashboard.css' // Import the CSS file

const Dashboard = () => {
  return (
    <div className='flex flex-row h-screen flex-grow w-full'>
      <div className='chat-container'>
        <Chat />
      </div>
      <div className='bg-black w-full h-screen'>
        oi
      </div>
    </div>
  )
}

export default Dashboard