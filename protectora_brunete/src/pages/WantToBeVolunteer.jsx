import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const HERO_PARAGRAPHS = ['Los voluntarios son imprescindibles para el funcionamiento del refugio. Únete y forma parte del equipo.']

const INTRO_PARAGRAPHS = ['El voluntariado en Arat Adopta no es simbólico. Es trabajo real dentro de un centro de acogida activo.', 'Las personas voluntarias forman parte del funcionamiento diario del refugio. Su compromiso impacta directamente en el bienestar y equilibrio de los animales mientras esperan adopción.', 'Puedes venir a ayudarnos desde una vez por semana, hasta varios días a la semana. La frecuencia la pones tú.', 'Si buscas implicarte de forma constante y responsable, únete y forma parte de nuestro equipo.'
]

const ROLE_PARAGRAPHS = ['El voluntariado implica colaboración directa en el cuidado diario de los animales, siempre bajo nuestros protocolos de trabajo y bienestar.', 'Las tareas habituales incluyen:', 'Estas acciones no son accesorias. Son parte del proceso de socialización que mejora su estabilidad y favorece una adopción responsable.', 'El voluntariado no sustituye al equipo. Lo refuerza.']

const ROLE_TASKS = ['Pasear a los perros.', 'Facilitar salidas al patio para que puedan moverse y relajarse.', 'Jugar con ellos como parte de su estimulación física y emocional.', 'Ofrecer contacto humano, atención y acompañamiento estructurado.']

const REQUIREMENTS = ['Ser mayor de edad.', 'Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).', 'Compromiso y regularidad en la colaboración.', 'Respeto estricto por los protocolos internos y criterios de bienestar animal.', 'Actitud responsable y capacidad de trabajo en equipo.']

const NOT_VOLUNTEERING = ['No es una actividad ocasional sin compromiso.', 'No es acceso libre al centro.', 'No es una experiencia recreativa.', 'No implica tomar decisiones sobre los animales.']

const START_PARAGRAPHS = ['Si consideras que puedes asumir un voluntariado con regularidad y responsabilidad, ponte en contacto con nosotros.', 'Te explicaremos el proceso de incorporación, las tareas disponibles y las condiciones de participación.', 'Valoramos el compromiso antes que la cantidad.']

function WantToBeVolunteer() {
  usePageTitle('Voluntariado')
  return (
    <div>
      <Header />
      <main className="page page--volunteer">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Quieres ser voluntario?</h1>
            {HERO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            {INTRO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-people page-section-icon"></i>
              ¿Cuál es tu función como voluntario?
            </h2>
            <p className="page-text">{ROLE_PARAGRAPHS[0]}</p>
            <p className="page-text">{ROLE_PARAGRAPHS[1]}</p>
            <ul className="page-list page-list--inline">
              {ROLE_TASKS.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">{ROLE_PARAGRAPHS[2]}</p>
            <p className="page-text">{ROLE_PARAGRAPHS[3]}</p>
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              Requisitos habituales
            </h2>
            <p className="page-text">
              Para mantener una organización estable y coherente, solicitamos:
            </p>
            <ul className="page-list">
              {REQUIREMENTS.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              No buscamos colaboraciones puntuales. Buscamos continuidad.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Lo que no es el voluntariado</h2>
            <p className="page-text">
              Para evitar expectativas erróneas:
            </p>
            <ul className="page-list">
              {NOT_VOLUNTEERING.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              Es una colaboración estructurada dentro de un proyecto con criterios definidos.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo empezar?</h2>
            {START_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
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
