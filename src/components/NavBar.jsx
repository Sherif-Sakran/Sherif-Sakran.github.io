import React from 'react'
import BurgerIcon from './BurgerIcon'
import '../css/NavBar.css'

const NavBar = () => {
    const isMobile = window.innerWidth <= 768;
    
  return (
        isMobile && (
        <nav className="navbar">
        <div className="navbar-content">
            <div className="navbar-left"></div>
            <div className="navbar-center">
            <h1>Sherif Sakran</h1>
            </div>
            <div className="navbar-right">
            <BurgerIcon />
            </div>
        </div>
        </nav>
        )
    )
}

export default NavBar
