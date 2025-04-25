import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const BurgerIcon = () => {
//   const isMobile = window.innerWidth <= 768;
  const isMobile = true;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {setMenuOpen(!menuOpen)};
  const closeMenu = () => {setMenuOpen(false)};

  return (
    <>
    {isMobile && (
        <button className="burger-icon" onClick={toggleMenu}>
          ☰
        </button>
      )}
      {menuOpen && (
        <nav className={`burger-links ${menuOpen ? 'open' : ''}`}>
            <ul>
            <li><Link to="/" onClick={closeMenu}>About</Link></li>
            <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            </ul>
        </nav>
        )}
    </>
  )
}

export default BurgerIcon
