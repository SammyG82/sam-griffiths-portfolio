import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="top-nav">
      <Link to="/" className="nav-logo">Home</Link>
      <div className="nav-links">
        <Link to="/experience" className={`nav-pill${location.pathname === '/experience' ? ' active' : ''}`}>
          Experiences
        </Link>
        {isHome ? (
          <a href="#projects" className="nav-pill">Projects</a>
        ) : (
          <Link to="/projects" className={`nav-pill${location.pathname === '/projects' ? ' active' : ''}`}>
            Projects
          </Link>
        )}
        {isHome ? (
          <a href="#about" className="nav-pill">About</a>
        ) : (
          <Link to="/about" className={`nav-pill${location.pathname === '/about' ? ' active' : ''}`}>
            About
          </Link>
        )}
        <Link to="/contact" className={`nav-pill${location.pathname === '/contact' ? ' active' : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
