import { Link } from 'react-router-dom'
import './components.css'

const SOCIAL_LINKS = [{ href: 'https://www.facebook.com/aratadopta', label: 'Facebook', icon: 'bi-facebook' }, { href: 'https://www.instagram.com/aratadopta', label: 'Instagram', icon: 'bi-instagram' }]

const LEGAL_LINKS = [{ to: '/términos-y-condiciones', label: 'Términos y condiciones' }, { to: '/política-de-cookies', label: 'Política de cookies' }, { to: '/política-de-privacidad', label: 'Política de privacidad' }, { to: '/aviso-legal', label: 'Aviso legal' }, { to: '/contacto', label: 'Contacto' }]

function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-social">
        <span className="footer-social-text">Síguenos en redes sociales</span>
        <div className="footer-social-icons">
          {SOCIAL_LINKS.map((item) => (<a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="footer-social-link"><i className={`bi ${item.icon}`}></i></a>))}
        </div>
      </section>

      <nav className="legal-information" aria-label="Enlaces legales y de contacto">
        {LEGAL_LINKS.map((item) => (<Link key={item.to} to={item.to}>{item.label}</Link>))}
      </nav>

      <p className="copyright">
        &copy; 2026 <Link to="/hsdkadmin/login" className="copyright-admin-link">ARAT VETERINARIOS TORRELODONES S.L.</Link> Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
