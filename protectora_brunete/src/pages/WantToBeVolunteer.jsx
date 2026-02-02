import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './WantToBeVolunteer.css'

function WantToBeVolunteer() {
  return (
    <div>
      <Header />
      <main className="volunteer-page">
        <div className="volunteer-container">
          <section className="vol-intro">
            <h1 className="vol-page-title">¿Quieres ser voluntario?</h1>
            <span className="vol-text">El voluntariado es una forma directa de colaborar con el bienestar de los animales. Tu tiempo y tu compromiso ayudan a mejorar el día a día en el centro de acogida y en las actividades que realizamos.</span>
            <span className="vol-text">Si tienes ganas de sumarte al equipo como voluntario o voluntaria, te contamos cómo puedes participar.</span>
          </section>

          <section className="vol-section">
            <h2 className="vol-section-title">¿Cuál es tu función como voluntario?</h2>
            <div className="vol-block">
              <span className="vol-text">Las personas voluntarias colaboran directamente en el bienestar diario de los animales. Su labor se centra en:</span>
              <ul className="vol-list">
                <li>Pasear a los perros.</li>
                <li>Facilitar salidas al patio para que puedan moverse y relajarse.</li>
                <li>Jugar con ellos como parte de su estimulación física y emocional.</li>
                <li>Ofrecer contacto humano, atención y acompañamiento.</li>
              </ul>
              <span className="vol-text">Estas acciones forman parte del proceso de socialización y contribuyen a que los animales se mantengan equilibrados mientras esperan una adopción.</span>
            </div>
          </section>

          <section className="vol-section">
            <h2 className="vol-section-title">Requisitos habituales</h2>
            <ul className="vol-list">
              <li>Ser mayor de edad.</li>
              <li>Vivir en la zona de actuación o cercanía (Boadilla del Monte y entorno).</li>
              <li>Compromiso y regularidad en la colaboración.</li>
              <li>Respeto por los protocolos de trabajo y bienestar animal.</li>
            </ul>
          </section>

          <section className="vol-section">
            <h2 className="vol-section-title">¿Cómo empezar?</h2>
            <div className="vol-block">
              <span className="vol-text">Si quieres ser voluntario o voluntaria, escríbenos por correo o contacta con nosotros. Te explicaremos el proceso, las tareas disponibles y los pasos para incorporarte al equipo.</span>
              <div className="vol-cta-wrap">
                <Link to="/contacto" className="vol-cta">Contactar para ser voluntario</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToBeVolunteer
