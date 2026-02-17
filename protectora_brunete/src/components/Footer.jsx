import { Link } from 'react-router-dom'
import './components.css'

function Footer() {
    return (
      <footer>
        <section className="footer-social">
          <span className="footer-social-text">Síguenos en redes sociales</span>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </section>
        <section className="legal-information">
          <Link to="/términos-y-condiciones">Términos y condiciones</Link>
          <Link to="/política-de-cookies">Política de cookies</Link>
          <Link to="/política-de-privacidad">Política de privacidad</Link>
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/contacto">Contacto</Link>
        </section>
        <span className="copyright">&copy; 2026 <Link to="/hsdkadmin/login" className="copyright-admin-link">ARAT VETERINARIOS TORRELODONES S.L.</Link> Todos los derechos reservados.</span>
      </footer>
    )
  }
  
  export default Footer
