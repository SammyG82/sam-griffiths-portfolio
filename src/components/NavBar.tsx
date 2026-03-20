import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() { setMenuOpen(false) }

  return (
    <nav className="top-nav">
      <Link to="/" className="nav-logo" onClick={closeMenu}>Home</Link>

      <button
        className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        <Link to="/experience" className={`nav-pill${location.pathname === '/experience' ? ' active' : ''}`} onClick={closeMenu}>
          Experience
        </Link>
        {isHome ? (
          <a href="#projects" className="nav-pill" onClick={closeMenu}>Projects</a>
        ) : (
          <Link to="/projects" className={`nav-pill${location.pathname === '/projects' ? ' active' : ''}`} onClick={closeMenu}>
            Projects
          </Link>
        )}
        {isHome ? (
          <a href="#about" className="nav-pill" onClick={closeMenu}>About</a>
        ) : (
          <Link to="/about" className={`nav-pill${location.pathname === '/about' ? ' active' : ''}`} onClick={closeMenu}>
            About
          </Link>
        )}
        <Link to="/contact" className={`nav-pill${location.pathname === '/contact' ? ' active' : ''}`} onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
