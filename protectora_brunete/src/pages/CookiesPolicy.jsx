import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageSEO from '../hooks/usePageSEO'
import { useCookieConsent } from '../context/useCookieConsent'
import './pages.css'

const LAST_UPDATED = 'Última actualización: 15 de abril de 2026'

function CookiesPolicy() {
  const { resetConsent, showBanner } = useCookieConsent()

  usePageSEO({
    title: 'Política de cookies',
    description: 'Política de cookies de Arat Adopta: qué cookies usamos y cómo gestionarlas.',
  })
  return (
    <div>
      <Header />
      <main className="page page--legal page--legal-cookies">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Política de cookies</h1>
            <p className="page-hero-text legal-page-updated">{LAST_UPDATED}</p>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <h2 className="page-section-title">¿Qué son las cookies?</h2>
            <span className="page-text">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tablet o móvil) cuando los visitas. Sirven para que el sitio web recuerde información sobre tu visita, como tu idioma preferido y otras opciones, con el fin de facilitar tu próxima visita y hacer que el sitio te resulte más útil.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Qué tipos de cookies utilizamos?</h2>
            <span className="page-text">
              En este sitio web utilizamos los siguientes tipos de cookies:
            </span>

            <section className="page-card">
              <h3 className="page-card-title">Cookies técnicas o necesarias</h3>
              <span className="page-text">
                Son aquellas que permiten la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en él existan. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión o acceder a partes de acceso restringido.
              </span>
              <span className="page-text">
                Estas cookies son imprescindibles para el correcto funcionamiento del sitio y no pueden desactivarse.
              </span>
            </section>

            <section className="page-card">
              <h3 className="page-card-title">Cookies de analítica</h3>
              <span className="page-text">
                Actualmente no utilizamos cookies de analítica web propias (por ejemplo, Google Analytics). Si en el futuro se incorporaran, actualizaremos esta política y, en su caso, solicitaremos tu consentimiento cuando la normativa lo exija.
              </span>
            </section>

            <section className="page-card">
              <h3 className="page-card-title">Cookies opcionales (terceros: YouTube)</h3>
              <span className="page-text">
                Si aceptas todas las cookies en el aviso del sitio, permites la carga del reproductor de vídeo de YouTube en
                la página de inicio. Hasta entonces mostramos una imagen estática y un enlace para ver el vídeo en el sitio
                de YouTube sin incrustar su reproductor aquí.
              </span>
            </section>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Cookies de terceros</h2>
            <span className="page-text">
              Este sitio web puede utilizar servicios de terceros que recopilarán información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.
            </span>
            <span className="page-text">
              En particular, este sitio web utiliza los siguientes servicios de terceros:
            </span>
            <ul className="page-list">
              <li><strong>YouTube</strong> — en la página de inicio el vídeo embebido solo se carga si has aceptado las cookies opcionales (dominio youtube-nocookie.com). YouTube/Google pueden establecer cookies o tecnologías similares cuando se usa el reproductor; puedes consultar su política en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
              <li><strong>Supabase</strong> — como servicio de backend para la gestión de datos de los animales en adopción. Las conexiones se realizan de forma segura y no se almacenan cookies adicionales en tu dispositivo con fines de seguimiento.</li>
            </ul>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Panel de preferencias</h2>
            <span className="page-text">
              Guardamos tu elección (solo necesarias o aceptar todas) en el almacenamiento local del navegador para no
              volver a mostrarte el aviso en cada visita. Puedes cambiar de opinión en cualquier momento.
            </span>
            <div className="page-cookie-prefs-actions">
              <button type="button" className="page-cookie-prefs-btn" onClick={resetConsent} disabled={showBanner}>
                {showBanner ? 'El aviso de cookies ya está visible' : 'Cambiar preferencias de cookies'}
              </button>
            </div>
            {!showBanner && (
              <span className="page-text page-text--small">
                Al pulsar el botón se borrará la preferencia guardada y volverá a aparecer el aviso inferior para que elijas de nuevo.
              </span>
            )}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo gestionar las cookies?</h2>
            <span className="page-text">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet. A continuación te indicamos los enlaces donde encontrarás información sobre cómo hacerlo en los navegadores más habituales:
            </span>
            <ul className="page-list">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <span className="page-text">
              Si desactivas las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Actualización de la política de cookies</h2>
            <span className="page-text">
              Esta política de cookies puede actualizarse en cualquier momento para adaptarse a novedades normativas o cambios en las cookies utilizadas. Te recomendamos revisarla periódicamente.
            </span>
            <span className="page-text">
              Si tienes cualquier duda sobre esta política de cookies, puedes contactar con nosotros a través del correo electrónico <a href="mailto:administracion@aratadopta.com">administracion@aratadopta.com</a>.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CookiesPolicy
