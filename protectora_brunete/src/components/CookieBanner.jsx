import { Link } from 'react-router-dom'
import { useCookieConsent } from '../context/useCookieConsent'
import './components.css'

function CookieBanner() {
  const { showBanner, acceptAll, acceptNecessaryOnly } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Preferencias de cookies"
      aria-live="polite"
    >
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Usamos cookies propias necesarias para el funcionamiento del sitio y, si lo aceptas, cargamos el vídeo de
          YouTube en la página de inicio (Google puede usar cookies o datos según su política). Puedes elegir solo las
          necesarias o aceptar todas. Más información en nuestra{' '}
          <Link to="/política-de-cookies" className="cookie-banner-link">
            política de cookies
          </Link>
          .
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-banner-btn cookie-banner-btn--secondary" onClick={acceptNecessaryOnly}>
            Solo necesarias
          </button>
          <button type="button" className="cookie-banner-btn cookie-banner-btn--primary" onClick={acceptAll}>
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
