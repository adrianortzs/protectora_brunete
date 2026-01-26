import './Footer.css'

function Footer() {
    return (
      <footer>
        <section className="about-us">
          <section className="contact-information">
              <h3>Información de contacto</h3>
              <ul>
                  <li>Emails -&gt; aratadopciones@gmail.com y gestion@aratadopta.com</li>
                  <li>Teléfonos -&gt; 918 15 92 94 (Torrelodones) y 918 15 86 73 (Brunete)</li>
                  <li>Redes sociales -&gt; <a href="https://www.facebook.com/aratadopta" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a> y <a href="https://www.instagram.com/aratadopta" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
              </ul>
          </section>
          <section className="centers">
              <h3>¿Dónde nos encontramos?</h3>
              <ul>
                  <li>Torrelodones -&gt; Paseo Joaquín Ruiz Gimenez 30, 28250 Torrelodones, Madrid</li>
                  <li>Brunete -&gt; Carretera M513 km 14.900, 28690 Brunete, Madrid</li>
              </ul>
          </section>
        </section>
  
        <section className="legal-information">
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/política-de-privacidad">Política de privacidad</a>
          <a href="/política-de-cookies">Política de cookies</a>
        </section>
  
        <span className="copyright">&copy; 2026 ARAT VETERINARIOS TORRELODONES S.L. Todos los derechos reservados.</span>
      </footer>
    )
  }
  
  export default Footer
