import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import aratLogo from '../assets/arat_logo.png'
import './components.css'

const NAV_ITEMS = [
  { type: 'link', href: '/quiénes-somos', label: 'Quiénes somos' },
  { type: 'dropdown', key: 'adopcion', label: 'En adopción', items: [{ to: '/en-adopción', label: '¿Quieres adoptar?' }, { to: '/animales-en-adopción/perros', label: 'Perros en adopción' }, { to: '/animales-en-adopción/gatos', label: 'Gatos en adopción' }]},
  { type: 'dropdown', key: 'colabora', label: 'Colabora', items: [{ to: '/colabora/casa-de-acogida', label: 'Casa de acogida' }, { to: '/colabora/voluntariado', label: 'Voluntariado' }, { to: '/colabora/donaciones', label: 'Donaciones' }]},
  { type: 'link', href: '/finales-felices', label: 'Finales felices' },
  { type: 'link', href: '/dónde-estamos', label: 'Dónde estamos' },
  { type: 'link', href: '/contacto', label: 'Contacto' }
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null)
  const [pinnedDesktopDropdown, setPinnedDesktopDropdown] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const dropdownRefs = useRef({})

  const closeAllDropdowns = useCallback(() => {
    setPinnedDesktopDropdown(null)
    setOpenDesktopDropdown(null)
    setOpenMobileDropdown(null)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setOpenMobileDropdown(null)
  }, [])

  const toggleMenu = useCallback(() => { setIsMenuOpen(prev => !prev) }, [])

  const handleDesktopMouseEnter = useCallback((key) => {
    setOpenDesktopDropdown(key)
  }, [])

  const handleDesktopMouseLeave = useCallback((key) => {
    if (pinnedDesktopDropdown !== key) setOpenDesktopDropdown(null)
  }, [pinnedDesktopDropdown])

  const handleDesktopDropdownToggle = useCallback((key, e) => {
    e.preventDefault()
    if (pinnedDesktopDropdown === key) {
      setPinnedDesktopDropdown(null)
      setOpenDesktopDropdown(null)
    } else {
      setPinnedDesktopDropdown(key)
      setOpenDesktopDropdown(key)
    }
  }, [pinnedDesktopDropdown])

  const handleMobileDropdownToggle = useCallback((key) => {
    setOpenMobileDropdown(prev => (prev === key ? null : key))
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
      const isClickInAnyDropdown = Object.values(dropdownRefs.current).some((node) => node?.contains(event.target))
      if (!isClickInAnyDropdown) closeAllDropdowns()
    }
    if (pinnedDesktopDropdown) document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [pinnedDesktopDropdown, closeAllDropdowns])

  return (
    <header className="header-container" role="banner">
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo-link" aria-label="Arat Adopta - Inicio">
            <img src={aratLogo} alt="Arat Adopta" className="logo" loading="eager" fetchPriority="high" decoding="async" />
            <span className="logo-text">Arat Adopta</span>
          </Link>
        </div>

        <nav className="nav nav-desktop" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            if (item.type === 'dropdown') {
              const isOpen = openDesktopDropdown === item.key || pinnedDesktopDropdown === item.key
              return (
                <div key={item.key} className="nav-item-dropdown" onMouseEnter={() => handleDesktopMouseEnter(item.key)} onMouseLeave={() => handleDesktopMouseLeave(item.key)} ref={(node) => { dropdownRefs.current[item.key] = node }}>
                  <button type="button" aria-expanded={isOpen} onClick={(e) => handleDesktopDropdownToggle(item.key, e)} className="nav-link nav-link-dropdown">
                    {item.label}
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu show">
                      {item.items.map((subItem) => (<Link key={subItem.to} to={subItem.to} className="dropdown-item" onClick={closeAllDropdowns}>{subItem.label}</Link>))}
                    </div>
                  )}
                </div>
              )
            }
            return <Link key={item.href} to={item.href} className="nav-link">{item.label}</Link>
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
        {NAV_ITEMS.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <div key={item.key} className="nav-item-dropdown">
                <button type="button" aria-expanded={openMobileDropdown === item.key} onClick={() => handleMobileDropdownToggle(item.key)} className="nav-link nav-link-dropdown">
                  {item.label}
                </button>
                {openMobileDropdown === item.key && (
                  <div className="dropdown-menu">
                    {item.items.map((subItem) => (<Link key={subItem.to} to={subItem.to} className="dropdown-item" onClick={closeMenu}>{subItem.label}</Link>))}
                  </div>
                )}
              </div>
            )
          }
          return <Link key={item.href} to={item.href} className="nav-link" onClick={closeMenu}>{item.label}</Link>
        })}
        <Link to="/animales-en-adopción" className="cta-primary-mobile" onClick={closeMenu}>Ver animales en adopción</Link>
      </nav>
    </header>
  )
}

export default Header
