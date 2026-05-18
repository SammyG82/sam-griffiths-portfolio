import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  function closeMenu() { setMenuOpen(false) }

  useEffect(() => {
    if (!menuOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus()
  }, [menuOpen])

  return (
    <nav className="top-nav" ref={navRef}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>Home</Link>

      <button
        ref={hamburgerRef}
        className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        <Link to="/experience" ref={firstLinkRef} className={`nav-pill${location.pathname === '/experience' ? ' active' : ''}`} onClick={closeMenu}>
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
