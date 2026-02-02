import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './FosterHome.css'

function FosterHome() {
  return (
    <div>
      <Header />
      <main className="foster-home-page">
        <div className="foster-home-container">
          <section className="fh-intro">
            <h1 className="fh-page-title">¿Te gustaría ser casa de acogida?</h1>
            <span className="fh-text">Las casas de acogida son fundamentales para nuestros animales. Ofrecen un entorno familiar temporal donde perros y gatos pueden recuperarse, socializar y prepararse para una adopción responsable.</span>
            <span className="fh-text">Si tienes espacio, tiempo y ganas de acoger temporalmente a un animal, tu ayuda marca la diferencia.</span>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">¿Qué implica ser casa de acogida?</h2>
            <div className="fh-block">
              <span className="fh-text">Como casa de acogida te encargas del día a día del animal en tu hogar: alimentación, paseos, cariño y un entorno estable. Nosotros nos ocupamos de los gastos veterinarios, identificación y del proceso de búsqueda de adopción.</span>
              <span className="fh-text">El periodo de acogida puede ser de semanas o meses, según el animal y la familia. El objetivo es que el animal esté bien cuidado hasta encontrar un hogar definitivo.</span>
            </div>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">Requisitos habituales</h2>
            <ul className="fh-list">
              <li>Vivir en la zona de actuación o cercanía (Boadilla del Monte y entorno).</li>
              <li>Compromiso de acoger al animal durante el tiempo acordado.</li>
              <li>Disponibilidad para revisiones veterinarias y posibles visitas de adoptantes.</li>
              <li>Entorno adecuado y seguro para el animal (según especie y tamaño).</li>
            </ul>
          </section>

          <section className="fh-section">
            <h2 className="fh-section-title">¿Cómo empezar?</h2>
            <div className="fh-block">
              <span className="fh-text">Si quieres ser casa de acogida, escríbenos por correo o contacta con nosotros. Te explicaremos el proceso, resolveremos dudas y valoraremos contigo la opción más adecuada según tu disponibilidad y experiencia.</span>
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
