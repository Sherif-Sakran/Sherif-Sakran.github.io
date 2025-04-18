import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const MainLayout = () => {
  return (
    <>
        <Sidebar />
        <Outlet />
    </>
  )
}

export default MainLayout
