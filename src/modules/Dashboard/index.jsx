import React, { useState } from 'react'
import Chat from './chat'
import './Dashboard.css' // Import the CSS file

const Dashboard = ({ toggleDashboard }) => {
  return (
    <div className='flex flex-col sm:flex-row h-screen flex-grow w-full overflow-hidden'>
      <div className='chat-container overflow-auto'>
        <Chat toggleDashboard={toggleDashboard} />
      </div>
      <div className='bg-black w-full h-screen hidden sm:block'>
        oi
      </div>
    </div>
  )
}

export default Dashboard