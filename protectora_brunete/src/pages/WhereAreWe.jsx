import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const HERO_PARAGRAPHS = ['Tenemos dos centros de acogida ubicados en la Comunidad de Madrid. Puedes visitarnos o contactarnos en cualquiera de nuestras ubicaciones.']

const LOCATIONS = [
  {
    city: 'Brunete',
    addressLines: ['Carretera M513 km 14.900', '28690 Brunete, Madrid'],
    phoneLabel: '918 15 86 73',
    phoneHref: 'tel:+34918158673',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Carretera+M513+km+14.900,+28690+Brunete,+Madrid',
    mapEmbedSrc: 'https://www.google.com/maps?q=Carretera+M513+km+14.900,+28690+Brunete,+Madrid&output=embed',
    mapTitle: 'Ubicación del centro de Brunete'
  },
  {
    city: 'Torrelodones',
    addressLines: ['Paseo Joaquín Ruiz Gimenez 30', '28250 Torrelodones, Madrid'],
    phoneLabel: '918 15 92 94',
    phoneHref: 'tel:+34918159294',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Paseo+Joaquín+Ruiz+Gimenez+30,+28250+Torrelodones,+Madrid',
    mapEmbedSrc: 'https://www.google.com/maps?q=Paseo+Joaquín+Ruiz+Gimenez+30,+28250+Torrelodones,+Madrid&output=embed',
    mapTitle: 'Ubicación del centro de Torrelodones'
  }
]

function WhereAreWe() {
  usePageTitle('Dónde estamos')
  return (
    <div>
      <Header />
      <main className="page page--where-are-we">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Dónde nos encontramos?</h1>
            {HERO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container">
          {LOCATIONS.map((location) => (
            <section key={location.city} className="location-row">
              <div className="location-info">
                <h2 className="page-section-title">
                  <i className="bi bi-geo-alt-fill page-section-icon"></i>
                  {location.city}
                </h2>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Dirección</h3>
                  {location.addressLines.map((line) => (<p key={line} className="contact-detail-value">{line}</p>))}
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Teléfono</h3>
                  <p className="contact-detail-value">
                    <a href={location.phoneHref}>{location.phoneLabel}</a>
                  </p>
                </div>
                <div className="location-map-link">
                  <a href={location.mapsHref} target="_blank" rel="noopener noreferrer" className="page-cta">
                    <i className="bi bi-map"></i> Abrir en Google Maps
                  </a>
                </div>
              </div>
              <div className="location-map-container">
                <iframe src={location.mapEmbedSrc} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={location.mapTitle}></iframe>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhereAreWe
