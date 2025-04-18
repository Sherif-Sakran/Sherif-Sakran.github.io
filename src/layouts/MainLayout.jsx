import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const MainLayout = () => {
  return (
    <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
    </ div>
  )
}

export default MainLayout
