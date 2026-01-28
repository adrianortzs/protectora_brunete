import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import aratLogo from '../assets/arat_logo.png'

const NAV_LINKS = [
  { href: '/adopta', label: 'Adopta' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/colabora', label: 'Colabora' },
  { href: '/contacto', label: 'Contacto' }
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdoptaDropdownOpen, setIsAdoptaDropdownOpen] = useState(false)
  const [isColaboraDropdownOpen, setIsColaboraDropdownOpen] = useState(false)
  const [isAdoptaPinned, setIsAdoptaPinned] = useState(false)
  const [isColaboraPinned, setIsColaboraPinned] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const adoptaDropdownRef = useRef(null)
  const colaboraDropdownRef = useRef(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const handleAdoptaMouseEnter = useCallback(() => {
    setIsAdoptaDropdownOpen(true)
  }, [])

  const handleAdoptaMouseLeave = useCallback(() => {
    if (!isAdoptaPinned) setIsAdoptaDropdownOpen(false)
  }, [isAdoptaPinned])

  const handleAdoptaClick = useCallback((e) => {
    e.preventDefault()
    setIsAdoptaPinned(prev => !prev)
    setIsAdoptaDropdownOpen(prev => !prev)
    setIsColaboraPinned(false)
    setIsColaboraDropdownOpen(false)
  }, [])

  const handleColaboraMouseEnter = useCallback(() => {
    setIsColaboraDropdownOpen(true)
  }, [])

  const handleColaboraMouseLeave = useCallback(() => {
    if (!isColaboraPinned) setIsColaboraDropdownOpen(false)
  }, [isColaboraPinned])

  const handleColaboraClick = useCallback((e) => {
    e.preventDefault()
    setIsColaboraPinned(prev => !prev)
    setIsColaboraDropdownOpen(prev => !prev)
    setIsAdoptaPinned(false)
    setIsAdoptaDropdownOpen(false)
  }, [])

  const toggleAdoptaDropdown = useCallback((e) => {
    e.preventDefault()
    setIsAdoptaDropdownOpen(prev => !prev)
  }, [])

  const toggleColaboraDropdown = useCallback((e) => {
    e.preventDefault()
    setIsColaboraDropdownOpen(prev => !prev)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event) => {
      const isClickInsideMenu = menuRef.current?.contains(event.target)
      const isClickOnButton = buttonRef.current?.contains(event.target)
      
      if (!isClickInsideMenu && !isClickOnButton) closeMenu()
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, closeMenu])

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      const isClickInAdopta = adoptaDropdownRef.current?.contains(event.target)
      const isClickInColabora = colaboraDropdownRef.current?.contains(event.target)
      
      if (!isClickInAdopta && !isClickInColabora) {
        setIsAdoptaPinned(false)
        setIsAdoptaDropdownOpen(false)
        setIsColaboraPinned(false)
        setIsColaboraDropdownOpen(false)
      }
    }

    if (isAdoptaPinned || isColaboraPinned) document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [isAdoptaPinned, isColaboraPinned])

  return (
    <header className="header-container" role="banner">
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo-link" aria-label="Arat Adopta - Inicio" onClick={closeMenu}>
            <img src={aratLogo} alt="Arat Adopta" className="logo"/>
            <span className="logo-text">Arat Adopta</span>
          </Link>
        </div>

        <nav className="nav nav-desktop" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            if (link.href === '/adopta') {
              return (
                <div key={link.href} className={`nav-item-dropdown ${isAdoptaPinned ? 'dropdown-pinned' : ''}`} onMouseEnter={handleAdoptaMouseEnter} onMouseLeave={handleAdoptaMouseLeave} ref={adoptaDropdownRef}>
                  <a href={link.href} className="nav-link nav-link-dropdown" onClick={handleAdoptaClick}>{link.label}</a>
                  {(isAdoptaDropdownOpen || isAdoptaPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/adopta" className="dropdown-item">¿Quieres adoptar?</Link>
                      <a href="/adopta/perros" className="dropdown-item">Perros en adopción</a>
                      <a href="/adopta/gatos" className="dropdown-item">Gatos en adopción</a>
                    </div>
                  )}
                </div>
              )
            }
            if (link.href === '/colabora') {
              return (
                <div key={link.href} className={`nav-item-dropdown ${isColaboraPinned ? 'dropdown-pinned' : ''}`} onMouseEnter={handleColaboraMouseEnter} onMouseLeave={handleColaboraMouseLeave} ref={colaboraDropdownRef}>
                  <a href={link.href} className="nav-link nav-link-dropdown" onClick={handleColaboraClick}>{link.label}</a>
                  {(isColaboraDropdownOpen || isColaboraPinned) && (
                    <div className="dropdown-menu show">
                      <a href="/colabora/casa-acogida" className="dropdown-item">¿Eres casa de acogida?</a>
                      <a href="/colabora/hazte-voluntario" className="dropdown-item">¿Quieres ser voluntario?</a>
                      <a href="/colabora/realiza-donativo" className="dropdown-item">Donaciones materiales</a>
                    </div>
                  )}
                </div>
              )
            }
            return (<Link key={link.href} to={link.href} className="nav-link">{link.label}</Link>)
          })}
        </nav>

        <div className="header-right">
          <Link to="/animales-en-adopcion" className="cta-primary">Ver animales en adopción</Link>
          <a href="/colabora" className="cta-secondary">Cómo colaborar</a>
        </div>

        <button ref={buttonRef} className="menu-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" type="button">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <nav ref={menuRef} id="mobile-menu" className={`nav nav-mobile ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Navegación móvil" aria-hidden={!isMenuOpen}>
        {NAV_LINKS.map((link) => {
          if (link.href === '/adopta') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <a href={link.href} className="nav-link nav-link-dropdown" onClick={toggleAdoptaDropdown}>{link.label}</a>
                {isAdoptaDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/adopta" className="dropdown-item" onClick={closeMenu}>¿Quieres adoptar?</Link>
                    <a href="/adopta/perros" className="dropdown-item" onClick={closeMenu}>Perros en adopción</a>
                    <a href="/adopta/gatos" className="dropdown-item" onClick={closeMenu}>Gatos en adopción</a>
                  </div>
                )}
              </div>
            )
          }
          if (link.href === '/colabora') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <a href={link.href} className="nav-link nav-link-dropdown" onClick={toggleColaboraDropdown}>{link.label}</a>
                {isColaboraDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="/colabora/casa-acogida" className="dropdown-item" onClick={closeMenu}>¿Eres casa de acogida?</a>
                    <a href="/colabora/hazte-voluntario" className="dropdown-item" onClick={closeMenu}>¿Quieres ser voluntario?</a>
                    <a href="/colabora/realiza-donativo" className="dropdown-item" onClick={closeMenu}>Donaciones materiales</a>
                  </div>
                )}
              </div>
            )
          }
          return (
            <Link key={link.href} to={link.href} className="nav-link" onClick={closeMenu}>{link.label}</Link>
          )
        })}
        <Link to="/animales-en-adopcion" className="cta-primary-mobile" onClick={closeMenu}>Ver animales en adopción</Link>
      </nav>
    </header>
  )
}

export default Header
