import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const INTRO_PARAGRAPHS = ['Las casas de acogida son esenciales para ofrecer un entorno estable a los animales. Si cuentas con tiempo y compromiso, tu hogar puede ser esa transición segura.']

const ABOUT_PARAGRAPHS = ['Las casas de acogida forman parte esencial de nuestro trabajo.', 'No son una solución improvisada: son un entorno temporal, estable y responsable donde cada animal puede recuperarse, adaptarse y prepararse para una adopción definitiva.', 'Si cuentas con tiempo, equilibrio y compromiso real, tu hogar puede ser una transición segura mientras encontramos el definitivo.']

const WHAT_IT_IMPLIES_PARAGRAPHS = ['Ser casa de acogida significa asumir el cuidado diario del animal en tu propio entorno: alimentación, paseos, descanso y estabilidad emocional.', 'Desde Arat Adopta nos encargamos de los gastos veterinarios, identificación y gestión completa del proceso de adopción. Trabajamos en coordinación contigo en todo momento.', 'El periodo de acogida puede durar semanas o meses, según las necesidades del animal. La prioridad siempre es su bienestar, no la rapidez del proceso.', 'La acogida no es una adopción anticipada. Es un compromiso temporal, acordado y acompañado por el equipo.']

const REQUIREMENTS = ['Residir en la zona de actuación o alrededores (Noroeste de la Comunidad de Madrid).', 'Compromiso para mantener la acogida durante el tiempo acordado.', 'Disponibilidad para revisiones veterinarias y posibles visitas de adoptantes.', 'Un entorno adecuado y seguro, adaptado a la especie y tamaño del animal.', 'Capacidad para asumir el proceso con responsabilidad, incluso si se prolonga más de lo previsto.']

const NOT_A_FOSTER_HOME = ['No es una prueba antes de adoptar.', 'No es una solución de fin de semana.', 'No es una decisión impulsiva.']

const START_PARAGRAPHS = ['Si consideras que puedes asumir una acogida con compromiso real, ponte en contacto con nosotros.', 'Te explicaremos el proceso, resolveremos tus dudas y valoraremos contigo si encaja con tu situación actual.']

function FosterHome() {
  usePageTitle('Casa de acogida')
  return (
    <div>
      <Header />
      <main className="page page--foster-home">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Te gustaría ser casa de acogida?</h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            {ABOUT_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-house-heart page-section-icon"></i>
              ¿Qué implica ser casa de acogida?
            </h2>
            {WHAT_IT_IMPLIES_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              Requisitos habituales
            </h2>
            <p className="page-text">
              Para garantizar una experiencia adecuada tanto para el animal como para la familia de acogida, valoramos:
            </p>
            <ul className="page-list">
              {REQUIREMENTS.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              No buscamos soluciones puntuales. Buscamos estabilidad.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Lo que no es una casa de acogida</h2>
            <p className="page-text">
              Para evitar malentendidos:
            </p>
            <ul className="page-list">
              {NOT_A_FOSTER_HOME.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              Es una colaboración responsable dentro de un proyecto estructurado.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo empezar?</h2>
            {START_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
            <div className="page-cta-wrap">
              <Link to="/contacto?asunto=Interés en ser casa de acogida&mensaje=Hola, me gustaría recibir información sobre cómo colaborar como casa de acogida #contact-form" className="page-cta">Quiero ser casa de acogida</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FosterHome
