import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function CookiesPolicy() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Política de Cookies</h1>
            <span className="collab-hero-text">
              Última actualización: 1 de enero de 2026
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué son las cookies?</h2>
            <span className="collab-text">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tablet o móvil) cuando los visitas. Sirven para que el sitio web recuerde información sobre tu visita, como tu idioma preferido y otras opciones, con el fin de facilitar tu próxima visita y hacer que el sitio te resulte más útil.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué tipos de cookies utilizamos?</h2>
            <span className="collab-text">
              En este sitio web utilizamos los siguientes tipos de cookies:
            </span>

            <section className="collab-card">
              <h3 className="collab-card-title">Cookies técnicas o necesarias</h3>
              <span className="collab-text">
                Son aquellas que permiten la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en él existan. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión o acceder a partes de acceso restringido.
              </span>
              <span className="collab-text">
                Estas cookies son imprescindibles para el correcto funcionamiento del sitio y no pueden desactivarse.
              </span>
            </section>

            <section className="collab-card">
              <h3 className="collab-card-title">Cookies analíticas</h3>
              <span className="collab-text">
                Son aquellas que permiten realizar el seguimiento y análisis del comportamiento de los usuarios del sitio web. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad del sitio web y para la elaboración de perfiles de navegación, con el fin de introducir mejoras en función del análisis de los datos de uso.
              </span>
            </section>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Cookies de terceros</h2>
            <span className="collab-text">
              Este sitio web puede utilizar servicios de terceros que recopilarán información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.
            </span>
            <span className="collab-text">
              En particular, este sitio web utiliza los siguientes servicios de terceros:
            </span>
            <ul className="collab-list">
              <li><strong>YouTube</strong> — para la reproducción de vídeos integrados. YouTube puede establecer cookies en tu dispositivo para gestionar el reproductor de vídeo y recopilar estadísticas de reproducción. Puedes consultar la política de privacidad de YouTube en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
              <li><strong>Supabase</strong> — como servicio de backend para la gestión de datos de los animales en adopción. Las conexiones se realizan de forma segura y no se almacenan cookies adicionales en tu dispositivo con fines de seguimiento.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cómo gestionar las cookies?</h2>
            <span className="collab-text">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet. A continuación te indicamos los enlaces donde encontrarás información sobre cómo hacerlo en los navegadores más habituales:
            </span>
            <ul className="collab-list">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <span className="collab-text">
              Si desactivas las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Actualización de la política de cookies</h2>
            <span className="collab-text">
              Esta política de cookies puede actualizarse en cualquier momento para adaptarse a novedades normativas o cambios en las cookies utilizadas. Te recomendamos revisarla periódicamente.
            </span>
            <span className="collab-text">
              Si tienes cualquier duda sobre esta política de cookies, puedes contactar con nosotros a través del correo electrónico <a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a>.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CookiesPolicy
