import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import volunteerImg from '../assets/4.png'
import './pages.css'

function WantToBeVolunteer() {
  usePageTitle('Voluntariado')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Quieres ser voluntario?</h1>
            <span className="page-hero-text">
              Los voluntarios son imprescindibles para el funcionamiento del refugio. Únete y forma parte del equipo.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <span className="page-text">
              El voluntariado en Arat Adopta no es simbólico. Es trabajo real dentro de un centro de acogida activo.
            </span>
            <span className="page-text">
              Las personas voluntarias forman parte del funcionamiento diario del refugio. Su compromiso impacta directamente en el bienestar y equilibrio de los animales mientras esperan adopción.
            </span>
            <span className="page-text">
              Puedes venir a ayudarnos desde una vez por semana, hasta varios días a la semana. La frecuencia la pones tú.
            </span>
            <span className="page-text">
              Si buscas implicarte de forma constante y responsable, únete y forma parte de nuestro equipo.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-people page-section-icon"></i>
              ¿Cuál es tu función como voluntario?
            </h2>
            <span className="page-text">
              El voluntariado implica colaboración directa en el cuidado diario de los animales, siempre bajo nuestros protocolos de trabajo y bienestar.
            </span>
            <span className="page-text">
              Las tareas habituales incluyen:
            </span>
            <ul className="page-list page-list--inline">
              <li>Pasear a los perros.</li>
              <li>Facilitar salidas al patio para que puedan moverse y relajarse.</li>
              <li>Jugar con ellos como parte de su estimulación física y emocional.</li>
              <li>Ofrecer contacto humano, atención y acompañamiento estructurado.</li>
            </ul>
            <span className="page-text">
              Estas acciones no son accesorias. Son parte del proceso de socialización que mejora su estabilidad y favorece una adopción responsable.
            </span>
            <span className="page-text">
              El voluntariado no sustituye al equipo. Lo refuerza.
            </span>
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              Requisitos habituales
            </h2>
            <span className="page-text">
              Para mantener una organización estable y coherente, solicitamos:
            </span>
            <ul className="page-list">
              <li>Ser mayor de edad.</li>
              <li>Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).</li>
              <li>Compromiso y regularidad en la colaboración.</li>
              <li>Respeto estricto por los protocolos internos y criterios de bienestar animal.</li>
              <li>Actitud responsable y capacidad de trabajo en equipo.</li>
            </ul>
            <span className="page-text">
              No buscamos colaboraciones puntuales. Buscamos continuidad.
            </span>
          </section>

          <section className='page-section'>
            <h2 className="page-section-title">Lo que no es el voluntariado</h2>
            <span className="page-text">
              Para evitar expectativas erróneas:
            </span>
            <ul className="page-list">
              <li>No es una actividad ocasional sin compromiso.</li>
              <li>No es acceso libre al centro.</li>
              <li>No es una experiencia recreativa.</li>
              <li>No implica tomar decisiones sobre los animales.</li>
            </ul>
            <span className="page-text">
              Es una colaboración estructurada dentro de un proyecto con criterios definidos.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo empezar?</h2>
            <span className="page-text">
              Si consideras que puedes asumir un voluntariado con regularidad y responsabilidad, ponte en contacto con nosotros.
            </span>
            <span className="page-text">
              Te explicaremos el proceso de incorporación, las tareas disponibles y las condiciones de participación.
            </span>
            <span className="page-text">
              Valoramos el compromiso antes que la cantidad.
            </span>
            <div className="page-cta-wrap">
              <Link to="/contacto?asunto=Interés en ser voluntario&mensaje=Hola, me gustaría recibir información sobre cómo colaborar como voluntario.#contact-form" className="page-cta">Quiero ser voluntario</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToBeVolunteer
