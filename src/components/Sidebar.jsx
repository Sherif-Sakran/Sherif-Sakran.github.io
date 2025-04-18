import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <h1>This is the sidebar component</h1>
      <nav>
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
