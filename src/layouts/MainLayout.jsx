import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import '../css/MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <p>© 2025 Sherif Sakran. All rights reserved.</p>
          {/* <p>Made with ❤️ using React.</p> */}
        </div>
    </ div>
  )
}

export default MainLayout
