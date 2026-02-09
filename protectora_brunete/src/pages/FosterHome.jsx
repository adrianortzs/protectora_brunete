import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function FosterHome() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">¿Te gustaría ser casa de acogida?</h1>
            <span className="collab-hero-text">
              Las casas de acogida son una parte esencial del proceso de protección animal. Ofrecen un entorno familiar temporal donde perros y gatos pueden recuperarse, socializar y prepararse para una adopción responsable.
            </span>
            <span className="collab-hero-text">
              Si dispones de espacio, tiempo y estabilidad para acoger temporalmente a un animal, tu colaboración marca una diferencia real.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué implica ser casa de acogida?</h2>
            <span className="collab-text">
              Como casa de acogida te encargas del cuidado diario del animal en tu hogar: alimentación, paseos, atención y un entorno estable. Desde la protectora nos ocupamos de los gastos veterinarios, la identificación y la gestión del proceso de adopción.
            </span>
            <span className="collab-text">
              El periodo de acogida puede variar, desde algunas semanas hasta varios meses, según el animal y su situación. El objetivo es garantizar su bienestar hasta que encuentre un hogar definitivo.
            </span>
          </section>

          <section className="collab-card">
            <h2 className="collab-card-title">Requisitos habituales</h2>
            <ul className="collab-list">
              <li>Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).</li>
              <li>Compromiso para acoger al animal durante el tiempo acordado.</li>
              <li>Disponibilidad para revisiones veterinarias y posibles visitas de adoptantes.</li>
              <li>Disponer de un entorno adecuado y seguro, según la especie y el tamaño del animal.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cómo empezar?</h2>
            <span className="collab-text">
              Si te interesa ser casa de acogida, ponte en contacto con nosotros. Te explicaremos el proceso, resolveremos tus dudas y valoraremos contigo la opción más adecuada según tu disponibilidad y experiencia.
            </span>
            <div className="collab-cta-wrap">
              <Link to="/contacto#contact-form" className="collab-cta">Contactar para ser casa de acogida</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FosterHome
