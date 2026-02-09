import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WhoAreWe() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">¿Quiénes somos?</h1>
            <span className="collab-hero-text">Protección animal con criterio, transparencia y compromiso real.</span>
            <span className="collab-hero-highlight">Cada decisión que tomamos tiene un único objetivo: el bienestar real de cada animal.</span>
          </div>
        </section>

        <div className="collab-container collab-container--wide">
          <section className="collab-intro-centered">
            <span className="collab-text">
              Somos la entidad responsable del servicio de <strong>Protección y Bienestar de los Animales Domésticos</strong> en el municipio de Boadilla del Monte, trabajando en colaboración directa con su Ayuntamiento.
            </span>
            <span className="collab-text">
              Nuestro trabajo se centra en la atención, protección y gestión responsable de animales domésticos, tomando siempre decisiones basadas en un criterio claro: el bienestar real de cada animal, no solo su gestión.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué hacemos?</h2>
            <div className="collab-cards-grid">
              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Protección y recogida</h3>
                <span className="collab-mini-card-text">
                  Atendemos a animales domésticos perdidos, abandonados o heridos que aparecen en el municipio, proporcionándoles los cuidados necesarios y la atención veterinaria que requiera cada caso.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Adopción responsable</h3>
                <span className="collab-mini-card-text">
                  Promovemos la adopción responsable de los perros y gatos acogidos. Nuestro objetivo es que cada animal encuentre un hogar adecuado, estable y seguro.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Control de colonias felinas</h3>
                <span className="collab-mini-card-text">
                  Gestionamos las colonias de gatos mediante el protocolo C.E.R. (captura, esterilización y retorno), una medida eficaz, ética y respetuosa para el control poblacional.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Servicio 24 horas</h3>
                <span className="collab-mini-card-text">
                  El servicio está operativo los 365 días del año, las 24 horas, para atender cualquier necesidad que pueda surgir en el municipio.
                </span>
              </article>
            </div>
          </section>

          <section className="collab-card collab-card--accent">
            <h2 className="collab-card-title">Centro de acogida</h2>
            <span className="collab-text">
              Disponemos de un centro de acogida animal autorizado por la Comunidad de Madrid, donde cada animal recibe la atención que necesita.
            </span>
            <ul className="collab-icon-list">
              <li>
                <span className="collab-icon-badge">
                  <i className="fa-solid fa-stethoscope"></i>
                </span>
                <span>Atención veterinaria completa</span>
              </li>
              <li>
                <span className="collab-icon-badge">
                  <i className="fa-solid fa-id-card"></i>
                </span>
                <span>Identificación y registro oficial</span>
              </li>
              <li>
                <span className="collab-icon-badge">
                  <i className="fa-solid fa-scissors"></i>
                </span>
                <span>Vacunación, desparasitación y esterilización</span>
              </li>
              <li>
                <span className="collab-icon-badge">
                  <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <span>Educación y adaptación para una convivencia equilibrada</span>
              </li>
            </ul>
            <span className="collab-registry">
              <span className="collab-registry-label">Número de registro:</span>
              <span className="collab-registry-number">ES280261000001</span>
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Nuestro equipo</h2>
            <span className="collab-text">
              El servicio está formado por profesionales con experiencia y vocación:
            </span>
            <ul className="collab-pills">
              <li>Cuidadores de animales</li>
              <li>Auxiliares veterinarios</li>
              <li>Veterinarios especialistas en etología y medicina médico-quirúrgica</li>
              <li>Personal administrativo</li>
            </ul>
          </section>

          <section className="collab-manifesto">
            <h2 className="collab-manifesto-title">Nuestro compromiso</h2>
            <ul className="collab-manifesto-list">
              <li>Fomentar la tenencia responsable</li>
              <li>Prevenir el abandono y el maltrato animal</li>
              <li>Impulsar la adopción responsable</li>
              <li>Gestionar de forma ética las colonias felinas</li>
              <li>Garantizar atención veterinaria integral</li>
            </ul>
            <span className="collab-manifesto-closing">
              Creemos en un modelo de protección animal eficaz, responsable y orientado al bienestar, no solo a la gestión.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
