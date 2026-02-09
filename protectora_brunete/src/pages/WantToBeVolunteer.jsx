import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WantToBeVolunteer() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">¿Quieres ser voluntario?</h1>
            <span className="collab-hero-text">
              El voluntariado es una forma directa de colaborar en el cuidado diario de los animales. El tiempo y el compromiso de las personas voluntarias contribuyen de manera real al funcionamiento del centro de acogida.
            </span>
            <span className="collab-hero-text">
              Si te interesa formar parte del equipo, aquí te explicamos cómo puedes participar.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">¿Cuál es tu función como voluntario?</h2>
            <span className="collab-text">
              Las personas voluntarias colaboran directamente en el bienestar diario de los animales.
            </span>
            <ul className="collab-list collab-list--inline">
              <li>Pasear a los perros.</li>
              <li>Facilitar salidas al patio para que puedan moverse y relajarse.</li>
              <li>Jugar con ellos como parte de su estimulación física y emocional.</li>
              <li>Ofrecer contacto humano, atención y acompañamiento.</li>
            </ul>
            <span className="collab-text">
              Estas acciones favorecen su socialización y contribuyen a que los animales se mantengan equilibrados mientras esperan una adopción.
            </span>
          </section>

          <section className="collab-card">
            <h2 className="collab-card-title">Requisitos habituales</h2>
            <ul className="collab-list">
              <li>Ser mayor de edad.</li>
              <li>Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).</li>
              <li>Compromiso y regularidad en la colaboración.</li>
              <li>Respeto por los protocolos de trabajo y bienestar animal.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cómo empezar?</h2>
            <span className="collab-text">
              Si quieres colaborar como voluntario o voluntaria, ponte en contacto con nosotros. Te explicaremos el proceso, las tareas disponibles y los pasos para incorporarte al equipo.
            </span>
            <div className="collab-cta-wrap">
              <Link to="/contacto?asunto=Interés en ser voluntario&mensaje=Hola, me gustaría recibir información sobre cómo colaborar como voluntario.#contact-form" className="collab-cta">Contactar para ser voluntario</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToBeVolunteer
