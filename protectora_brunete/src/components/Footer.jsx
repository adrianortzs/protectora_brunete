import { Link } from 'react-router-dom'
import './components.css'

function Footer() {
    return (
      <footer>
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
