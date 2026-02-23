import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import aratLogo from '../assets/arat_logo.png'
import './components.css'

const NAV_LINKS = [{ href: '/quiénes-somos', label: 'Quiénes somos' }, { href: '/en-adopción', label: 'En adopción' }, { href: '/colabora', label: 'Colabora' }, { href: '/gestión-felina', label: 'Gestión felina' }, { href: '/finales-felices', label: 'Finales felices' }, { href: '/dónde-estamos', label: 'Dónde estamos'}, { href: '/contacto', label: 'Contacto' }]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdopcionDropdownOpen, setIsAdopcionDropdownOpen] = useState(false)
  const [isColaboracionDropdownOpen, setIsColaboracionDropdownOpen] = useState(false)
  const [isFelinaDropdownOpen, setIsFelinaDropdownOpen] = useState(false)
  const [isAdopcionPinned, setIsAdopcionPinned] = useState(false)
  const [isColaboracionPinned, setIsColaboracionPinned] = useState(false)
  const [isFelinaPinned, setIsFelinaPinned] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const adopcionDropdownRef = useRef(null)
  const colaboracionDropdownRef = useRef(null)
  const felinaDropdownRef = useRef(null)

  const closeAllDropdowns = () => {
    setIsAdopcionPinned(false); setIsAdopcionDropdownOpen(false)
    setIsColaboracionPinned(false); setIsColaboracionDropdownOpen(false)
    setIsFelinaPinned(false); setIsFelinaDropdownOpen(false)
  }

  const closeMenu = useCallback(() => { setIsMenuOpen(false) }, [])
  const toggleMenu = useCallback(() => { setIsMenuOpen(prev => !prev) }, [])
  const handleAdopcionMouseEnter = useCallback(() => { setIsAdopcionDropdownOpen(true) }, [])
  const handleAdopcionMouseLeave = useCallback(() => { if (!isAdopcionPinned) setIsAdopcionDropdownOpen(false) }, [isAdopcionPinned])
  const handleAdopcionClick = useCallback((e) => {
    e.preventDefault()
    setIsAdopcionPinned(prev => !prev)
    setIsAdopcionDropdownOpen(prev => !prev)
    setIsColaboracionPinned(false); setIsColaboracionDropdownOpen(false)
    setIsFelinaPinned(false); setIsFelinaDropdownOpen(false)
  }, [])
  const handleColaboracionMouseEnter = useCallback(() => { setIsColaboracionDropdownOpen(true) }, [])
  const handleColaboracionMouseLeave = useCallback(() => { if (!isColaboracionPinned) setIsColaboracionDropdownOpen(false) }, [isColaboracionPinned])
  const handleColaboracionClick = useCallback(() => {
    setIsColaboracionPinned(prev => !prev)
    setIsColaboracionDropdownOpen(prev => !prev)
    setIsAdopcionPinned(false); setIsAdopcionDropdownOpen(false)
    setIsFelinaPinned(false); setIsFelinaDropdownOpen(false)
  }, [])
  const handleFelinaMouseEnter = useCallback(() => { setIsFelinaDropdownOpen(true) }, [])
  const handleFelinaMouseLeave = useCallback(() => { if (!isFelinaPinned) setIsFelinaDropdownOpen(false) }, [isFelinaPinned])
  const handleFelinaClick = useCallback(() => {
    setIsFelinaPinned(prev => !prev)
    setIsFelinaDropdownOpen(prev => !prev)
    setIsAdopcionPinned(false); setIsAdopcionDropdownOpen(false)
    setIsColaboracionPinned(false); setIsColaboracionDropdownOpen(false)
  }, [])
  const toggleAdopcionDropdown = useCallback((e) => {
    e.preventDefault()
    setIsAdopcionDropdownOpen(prev => !prev)
  }, [])
  const toggleColaboracionDropdown = useCallback(() => {
    setIsColaboracionDropdownOpen(prev => !prev)
  }, [])
  const toggleFelinaDropdown = useCallback(() => {
    setIsFelinaDropdownOpen(prev => !prev)
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
      const isClickInFelina = felinaDropdownRef.current?.contains(event.target)
      if (!isClickInAdopcion && !isClickInColaboracion && !isClickInFelina) {
        closeAllDropdowns()
      }
    }
    if (isAdopcionPinned || isColaboracionPinned || isFelinaPinned) document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [isAdopcionPinned, isColaboracionPinned, isFelinaPinned])

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
            if (link.href === '/en-adopción') {
              return (
                <div key={link.href} className="nav-item-dropdown" onMouseEnter={handleAdopcionMouseEnter} onMouseLeave={handleAdopcionMouseLeave} ref={adopcionDropdownRef}>
                  <a href={link.href} className="nav-link nav-link-dropdown" onClick={handleAdopcionClick}>{link.label}</a>
                  {(isAdopcionDropdownOpen || isAdopcionPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/en-adopción" className="dropdown-item">¿Quieres adoptar?</Link>
                      <Link to="/10-peticiones-de-un-perro" className="dropdown-item">Peticiones de un perro</Link>
                      <Link to="/animales-en-adopción/perros" className="dropdown-item">Perros en adopción</Link>
                      <Link to="/animales-en-adopción/gatos" className="dropdown-item">Gatos en adopción</Link>
                    </div>
                  )}
                </div>
              )
            }
            if (link.href === '/colabora') {
              return (
                <div key={link.href} className="nav-item-dropdown" onMouseEnter={handleColaboracionMouseEnter} onMouseLeave={handleColaboracionMouseLeave} ref={colaboracionDropdownRef}>
                  <button type="button" className="nav-link nav-link-dropdown" onClick={handleColaboracionClick}>{link.label}</button>
                  {(isColaboracionDropdownOpen || isColaboracionPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/colabora/casa-de-acogida" className="dropdown-item">Casa de acogida</Link>
                      <Link to="/colabora/voluntariado" className="dropdown-item">Voluntariado</Link>
                      <Link to="/colabora/donaciones" className="dropdown-item">Donaciones</Link>
                    </div>
                  )}
                </div>
              )
            }
            if (link.href === '/gestión-felina') {
              return (
                <div key={link.href} className="nav-item-dropdown" onMouseEnter={handleFelinaMouseEnter} onMouseLeave={handleFelinaMouseLeave} ref={felinaDropdownRef}>
                  <button type="button" className="nav-link nav-link-dropdown" onClick={handleFelinaClick}>{link.label}</button>
                  {(isFelinaDropdownOpen || isFelinaPinned) && (
                    <div className="dropdown-menu show">
                      <Link to="/gestión-felina/ces" className="dropdown-item">CES</Link>
                      <Link to="/gestión-felina/castración" className="dropdown-item">Castración en gatos</Link>
                      <Link to="/gestión-felina/gatos-callejeros" className="dropdown-item">Gatos callejeros</Link>
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
          if (link.href === '/en-adopción') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <a href={link.href} className="nav-link nav-link-dropdown" onClick={toggleAdopcionDropdown}>{link.label}</a>
                {isAdopcionDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/en-adopción" className="dropdown-item" onClick={closeMenu}>¿Quieres adoptar?</Link>
                    <Link to="/10-peticiones-de-un-perro" className="dropdown-item" onClick={closeMenu}>Peticiones de un perro</Link>
                    <Link to="/animales-en-adopción/perros" className="dropdown-item" onClick={closeMenu}>Perros en adopción</Link>
                    <Link to="/animales-en-adopción/gatos" className="dropdown-item" onClick={closeMenu}>Gatos en adopción</Link>
                  </div>
                )}
              </div>
            )
          }
          if (link.href === '/colabora') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <button type="button" className="nav-link nav-link-dropdown" onClick={toggleColaboracionDropdown}>{link.label}</button>
                {isColaboracionDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/colabora/casa-de-acogida" className="dropdown-item" onClick={closeMenu}>Casa de acogida</Link>
                    <Link to="/colabora/voluntariado" className="dropdown-item" onClick={closeMenu}>Voluntariado</Link>
                    <Link to="/colabora/donaciones" className="dropdown-item" onClick={closeMenu}>Donaciones</Link>
                  </div>
                )}
              </div>
            )
          }
          if (link.href === '/gestión-felina') {
            return (
              <div key={link.href} className="nav-item-dropdown">
                <button type="button" className="nav-link nav-link-dropdown" onClick={toggleFelinaDropdown}>{link.label}</button>
                {isFelinaDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/gestión-felina/ces" className="dropdown-item" onClick={closeMenu}>CES</Link>
                    <Link to="/gestión-felina/castración" className="dropdown-item" onClick={closeMenu}>Castración en gatos</Link>
                    <Link to="/gestión-felina/gatos-callejeros" className="dropdown-item" onClick={closeMenu}>Gatos callejeros</Link>
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
