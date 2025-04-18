import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'
import photo from '../assets/images/Sherif.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sherif Sakran</h1>
      <img src={photo} alt="Cheefrul" className="profile-pic"/>
      <nav className="nav-links">
        <NavLink to="/" >
            Home
        </NavLink>
        <NavLink to="/resume" >
            Resume
        </NavLink>
        <NavLink to="/projects" >
            Projects
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
