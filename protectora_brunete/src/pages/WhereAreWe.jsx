import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

function WhereAreWe() {
  usePageTitle('Dónde estamos')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Dónde nos encontramos?</h1>
            <span className="page-hero-text">
              Tenemos dos centros de acogida ubicados en la Comunidad de Madrid. Puedes visitarnos o contactarnos en cualquiera de nuestras ubicaciones.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="location-row">
            <div className="location-info">
              <h2 className="page-section-title">
                <i className="bi bi-geo-alt-fill page-section-icon"></i>
                Brunete
              </h2>
              <div className="contact-detail">
                <h3 className="contact-detail-label">Dirección</h3>
                <span className="contact-detail-value">Carretera M513 km 14.900</span>
                <span className="contact-detail-value">28690 Brunete, Madrid</span>
              </div>
              <div className="contact-detail">
                <h3 className="contact-detail-label">Teléfono</h3>
                <span className="contact-detail-value"><a href="tel:+34918158673">918 15 86 73</a></span>
              </div>
              <div className="location-map-link">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Carretera+M513+km+14.900,+28690+Brunete,+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="page-cta"
                >
                  <i className="bi bi-map"></i> Abrir en Google Maps
                </a>
              </div>
            </div>
            <div className="location-map-container">
              <iframe
                src="https://www.google.com/maps?q=Carretera+M513+km+14.900,+28690+Brunete,+Madrid&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del centro de Brunete"
              ></iframe>
            </div>
          </section>

          <section className="location-row">
            <div className="location-info">
              <h2 className="page-section-title">
                <i className="bi bi-geo-alt-fill page-section-icon"></i>
                Torrelodones
              </h2>
              <div className="contact-detail">
                <h3 className="contact-detail-label">Dirección</h3>
                <span className="contact-detail-value">Paseo Joaquín Ruiz Gimenez 30</span>
                <span className="contact-detail-value">28250 Torrelodones, Madrid</span>
              </div>
              <div className="contact-detail">
                <h3 className="contact-detail-label">Teléfono</h3>
                <span className="contact-detail-value"><a href="tel:+34918159294">918 15 92 94</a></span>
              </div>
              <div className="location-map-link">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Paseo+Joaquín+Ruiz+Gimenez+30,+28250+Torrelodones,+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="page-cta"
                >
                  <i className="bi bi-map"></i> Abrir en Google Maps
                </a>
              </div>
            </div>
            <div className="location-map-container">
              <iframe
                src="https://www.google.com/maps?q=Paseo+Joaquín+Ruiz+Gimenez+30,+28250+Torrelodones,+Madrid&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del centro de Torrelodones"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhereAreWe
