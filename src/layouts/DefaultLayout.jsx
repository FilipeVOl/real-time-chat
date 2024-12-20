import React, { useState } from 'react'
import Dashboard from '../modules/Dashboard/chat'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  }

  return (
    <div className='flex w-full min-h-screen overflow-auto'>
      <button className='bg-blue-500 text-white sm:hidden' onClick={toggleDashboard}>
        {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>
      <div className={`fixed sm:relative w-full sm:w-72 ${showDashboard ? 'block' : 'hidden'} sm:block`}>
        <Dashboard toggleDashboard={toggleDashboard} />
      </div>
      <div className={`flex-grow ${showDashboard ? 'hidden' : 'block'} sm:block`}>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout