import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function FosterHome() {
  return (
    <div>
      <Header />
      <main className="fh-page">
        <div className="fh-container">
          <section className="fh-intro">
            <h1 className="fh-title">
              ¿Te gustaría ser casa de acogida?
            </h1>
            <span className="fh-text">
              Las casas de acogida son una parte esencial del proceso de protección animal. Ofrecen un entorno familiar temporal donde perros y gatos pueden recuperarse, socializar y prepararse para una adopción responsable.
            </span>
            <span className="fh-text">
              Si dispones de espacio, tiempo y estabilidad para acoger temporalmente a un animal, tu colaboración marca una diferencia real.
            </span>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">
              ¿Qué implica ser casa de acogida?
            </h2>
            <div className="fh-block">
              <span className="fh-text">
                Como casa de acogida te encargas del cuidado diario del animal en tu hogar: alimentación, paseos, atención y un entorno estable. Desde la protectora nos ocupamos de los gastos veterinarios, la identificación y la gestión del proceso de adopción.
              </span>
              <span className="fh-text">
                El periodo de acogida puede variar, desde algunas semanas hasta varios meses, según el animal y su situación. El objetivo es garantizar su bienestar hasta que encuentre un hogar definitivo.
              </span>
            </div>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">
              Requisitos habituales
            </h2>
            <ul className="fh-list">
              <li>Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).</li>
              <li>Compromiso para acoger al animal durante el tiempo acordado.</li>
              <li>Disponibilidad para revisiones veterinarias y posibles visitas de adoptantes.</li>
              <li>Disponer de un entorno adecuado y seguro, según la especie y el tamaño del animal.</li>
            </ul>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">
              ¿Cómo empezar?
            </h2>
            <div className="fh-block">
              <span className="fh-text">
                Si te interesa ser casa de acogida, ponte en contacto con nosotros. Te explicaremos el proceso, resolveremos tus dudas y valoraremos contigo la opción más adecuada según tu disponibilidad y experiencia.
              </span>
              <div className="fh-cta-wrap">
                <Link to="/contacto" className="fh-cta">Contactar para ser casa de acogida</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FosterHome
