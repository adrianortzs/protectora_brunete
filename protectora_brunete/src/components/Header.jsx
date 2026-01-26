import { useState, useEffect, useRef, useCallback } from 'react'
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
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
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

  return (
    <header className="header-container" role="banner">
      <div className="header">
        <div className="header-left">
          <a href="/" className="logo-link" aria-label="Arat Adopta - Inicio" onClick={closeMenu}>
            <img src={aratLogo} alt="Arat Adopta" className="logo"/>
            <span className="logo-text">Arat Adopta</span>
          </a>
        </div>

        <nav className="nav nav-desktop" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>

        <div className="header-right">
          <a href="/adopta" className="cta-primary">Ver animales en adopción</a>
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
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="/adopta" className="cta-primary-mobile" onClick={closeMenu}>Ver animales en adopción</a>
      </nav>
    </header>
  )
}

export default Header
