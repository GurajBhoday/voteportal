import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-dash flex w-full h-screen p-5'>

      <Sidebar />

      <Outlet />
    </div>
  )
}

export default Dashboard