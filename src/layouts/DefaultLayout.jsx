import React from 'react'
import Dashboard from '../modules/Dashboard/chat'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='fixed w-72'>
        <Dashboard />
      </div>
      <div className='flex-grow ml-72'>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout