import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import aratLogo from '../assets/arat_logo.png'
import './components.css'

const NAV_LINKS = [ { href: '/adopción', label: 'Adopción' }, { href: '/finales-felices', label: 'Finales Felices' }, { href: '/colaboración', label: 'Colaboración' }, { href: '/quiénes-somos', label: 'Quiénes Somos' }, { href: '/contacto', label: 'Contacto' } ]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdopcionDropdownOpen, setIsAdopcionDropdownOpen] = useState(false)
  const [isColaboracionDropdownOpen, setIsColaboracionDropdownOpen] = useState(false)
  const [isAdopcionPinned, setIsAdopcionPinned] = useState(false)
  const [isColaboracionPinned, setIsColaboracionPinned] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const adopcionDropdownRef = useRef(null)
  const colaboracionDropdownRef = useRef(null)

  const closeMenu = useCallback(() => { setIsMenuOpen(false) }, [])
  const toggleMenu = useCallback(() => { setIsMenuOpen(prev => !prev) }, [])
  const handleAdopcionMouseEnter = useCallback(() => { setIsAdopcionDropdownOpen(true) }, [])
  const handleAdopcionMouseLeave = useCallback(() => { if (!isAdopcionPinned) setIsAdopcionDropdownOpen(false) }, [isAdopcionPinned])
  const handleAdopcionClick = useCallback((e) => {
    e.preventDefault()
    setIsAdopcionPinned(prev => !prev)
    setIsAdopcionDropdownOpen(prev => !prev)
    setIsColaboracionPinned(false)
    setIsColaboracionDropdownOpen(false)
  }, [])
  const handleColaboracionMouseEnter = useCallback(() => { setIsColaboracionDropdownOpen(true) }, [])
  const handleColaboracionMouseLeave = useCallback(() => { if (!isColaboracionPinned) setIsColaboracionDropdownOpen(false) }, [isColaboracionPinned])
  const handleColaboracionClick = useCallback((e) => {
    e.preventDefault()
    setIsColaboracionPinned(prev => !prev)
    setIsColaboracionDropdownOpen(prev => !prev)
    setIsAdopcionPinned(false)
    setIsAdopcionDropdownOpen(false)
  }, [])
  const toggleAdopcionDropdown = useCallback((e) => {
    e.preventDefault()
    setIsAdopcionDropdownOpen(prev => !prev)
  }, [])
  const toggleColaboracionDropdown = useCallback((e) => {
    e.preventDefault()
    setIsColaboracionDropdownOpen(prev => !prev)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event) => {
      const isClickInsideMenu = menuRef.current?.contains(event.target)
      const isClickOnButton = buttonRef.current?.contains(event.target)
      if (!isClickInsideMenu && !isClickOnButton) closeMenu()
    }
    const handleEscape = (event) => { if (event.key === 'Escape') closeMenu() }
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
      const isClickInAdopcion = adopcionDropdownRef.current?.contains(event.target)
      const isClickInColaboracion = colaboracionDropdownRef.current?.contains(event.target)
      if (!isClickInAdopcion && !isClickInColaboracion) {
        setIsAdopcionPinned(false)
        setIsAdopcionDropdownOpen(false)
        setIsColaboracionPinned(false)
        setIsColaboracionDropdownOpen(false)
      }
    }
    if (isAdopcionPinned || isColaboracionPinned) document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [isAdopcionPinned, isColaboracionPinned])

  return (
    <header className="header-container" role="banner">
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo-link" aria-label="Arat Adopta - Inicio">
            <img src={aratLogo} alt="Arat Adopta" className="logo"/>
            <span className="logo-text">Arat Adopta</span>
          </Link>
        </div>

        <nav className="nav nav-desktop" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            if (link.href === '/adopción') {
              return (
                <div key={link.href} className={`nav-item-dropdown ${isAdopcionPinned ? 'dropdown-pinned' : ''}`} onMouseEnter={handleAdopcionMouseEnter} onMouseLeave={handleAdopcionMouseLeave} ref={adopcionDropdownRef}>
                  <a href={link.href} className="nav-link nav-link-dropdown" onClick={handleAdopcionClick}>{link.label}</a>
                  {(isAdopcionDropdownOpen || isAdopcionPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/adopción" className="dropdown-item">¿Quieres adoptar?</Link>
                      <Link to="/animales-en-adopción/perros" className="dropdown-item">Perros en adopción</Link>
                      <Link to="/animales-en-adopción/gatos" className="dropdown-item">Gatos en adopción</Link>
                    </div>
                  )}
                </div>
              )
            }
            if (link.href === '/colaboración') {
              return (
                <div key={link.href} className={`nav-item-dropdown ${isColaboracionPinned ? 'dropdown-pinned' : ''}`} onMouseEnter={handleColaboracionMouseEnter} onMouseLeave={handleColaboracionMouseLeave} ref={colaboracionDropdownRef}>
                  <a href={link.href} className="nav-link nav-link-dropdown" onClick={handleColaboracionClick}>{link.label}</a>
                  {(isColaboracionDropdownOpen || isColaboracionPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/colaboración/casa-de-acogida" className="dropdown-item">Casa de acogida</Link>
                      <Link to="/colaboración/voluntariado" className="dropdown-item">Voluntariado</Link>
                      <Link to="/colaboración/donaciones" className="dropdown-item">Donaciones</Link>
                    </div>
                  )}
                </div>
              )
            }
            return (<Link key={link.href} to={link.href} className="nav-link">{link.label}</Link>)
          })}
        </nav>

        <div className="header-right">
          <Link to="/animales-en-adopción" className="cta-primary">Ver animales en adopción</Link>
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
          if (link.href === '/adopción') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <a href={link.href} className="nav-link nav-link-dropdown" onClick={toggleAdopcionDropdown}>{link.label}</a>
                {isAdopcionDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/adopción" className="dropdown-item" onClick={closeMenu}>¿Quieres adoptar?</Link>
                    <Link to="/animales-en-adopción/perros" className="dropdown-item" onClick={closeMenu}>Perros en adopción</Link>
                    <Link to="/animales-en-adopción/gatos" className="dropdown-item" onClick={closeMenu}>Gatos en adopción</Link>
                  </div>
                )}
              </div>
            )
          }
          if (link.href === '/colaboración') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <a href={link.href} className="nav-link nav-link-dropdown" onClick={toggleColaboracionDropdown}>{link.label}</a>
                {isColaboracionDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/colaboración/casa-de-acogida" className="dropdown-item" onClick={closeMenu}>Casa de acogida</Link>
                    <Link to="/colaboración/voluntariado" className="dropdown-item" onClick={closeMenu}>Voluntariado</Link>
                    <Link to="/colaboración/donaciones" className="dropdown-item" onClick={closeMenu}>Donaciones</Link>
                  </div>
                )}
              </div>
            )
          }
          return (
            <Link key={link.href} to={link.href} className="nav-link" onClick={closeMenu}>{link.label}</Link>
          )
        })}
        <Link to="/animales-en-adopción" className="cta-primary-mobile" onClick={closeMenu}>Ver animales en adopción</Link>
      </nav>
    </header>
  )
}

export default Header
