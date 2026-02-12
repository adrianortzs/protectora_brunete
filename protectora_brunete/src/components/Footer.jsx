import { Link } from 'react-router-dom'
import './components.css'

function Footer() {
    return (
      <footer>
        <section className="legal-information">
          <Link to="/aviso-legal">Aviso Legal</Link>
          <Link to="/política-de-privacidad">Política de Privacidad</Link>
          <Link to="/política-de-cookies">Política de Cookies</Link>
        </section>
        <span className="copyright">&copy; 2026 <Link to="/admin/login" className="copyright-admin-link">ARAT VETERINARIOS TORRELODONES S.L.</Link> Todos los derechos reservados.</span>
      </footer>
    )
  }
  
  export default Footer
