import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'
import '../CSS/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const [theme, setTheme] = useState('dark')

      useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setTheme(savedTheme)
        document.body.setAttribute('data-theme', savedTheme)
      }, [])

      const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.body.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
      }

  return (
    <div className="NavContainer">
      <Link to="home" smooth duration={500} spy offset={-80} className="Logo" onClick={closeMenu}>
        <h1>
          <span className='Myname'>ArunSai</span>-Portfolio
        </h1>
      </Link>

      {/* Hamburger icon */}
      <div className={`Hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`NavLinks ${menuOpen ? 'show' : ''}`}>
        <Link to="home" smooth duration={500} spy offset={-80} onClick={closeMenu}>
          Home
        </Link>
        <Link to="skills" smooth duration={500} spy offset={-80} onClick={closeMenu}>
          Skills
        </Link>
        <Link to="Myprojects" smooth duration={500} spy offset={-80} onClick={closeMenu}>
          Projects
        </Link>
        <Link to="contact" smooth duration={500} spy offset={-80} onClick={closeMenu}>
          Contact
        </Link>
      </nav>
      {/* Theme Toggle */}
      <button className="ThemeToggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </div>
  )
}

export default Navbar
