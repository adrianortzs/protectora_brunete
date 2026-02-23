import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

function FosterHome() {
  usePageTitle('Casa de acogida')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Te gustaría ser casa de acogida?</h1>
            <span className="page-hero-text">
              Las casas de acogida son esenciales para ofrecer un entorno estable a los animales. Si cuentas con tiempo y compromiso, tu hogar puede ser esa transición segura.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <span className="page-text">
              Las casas de acogida forman parte esencial de nuestro trabajo.
            </span>
            <span className="page-text">
              No son una solución improvisada: son un entorno temporal, estable y responsable donde cada animal puede recuperarse, adaptarse y prepararse para una adopción definitiva.
            </span>
            <span className="page-text">
              Si cuentas con tiempo, equilibrio y compromiso real, tu hogar puede ser una transición segura mientras encontramos el definitivo.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-house-heart page-section-icon"></i>
              ¿Qué implica ser casa de acogida?
            </h2>
            <span className="page-text">
              Ser casa de acogida significa asumir el cuidado diario del animal en tu propio entorno: alimentación, paseos, descanso y estabilidad emocional.
            </span>
            <span className="page-text">
              Desde Arat Adopta nos encargamos de los gastos veterinarios, identificación y gestión completa del proceso de adopción. Trabajamos en coordinación contigo en todo momento.
            </span>
            <span className="page-text">
              El periodo de acogida puede durar semanas o meses, según las necesidades del animal. La prioridad siempre es su bienestar, no la rapidez del proceso.
            </span>
            <span className="page-text">
              La acogida no es una adopción anticipada. Es un compromiso temporal, acordado y acompañado por el equipo.
            </span>
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              Requisitos habituales
            </h2>
            <span className="page-text">
              Para garantizar una experiencia adecuada tanto para el animal como para la familia de acogida, valoramos:
            </span>
            <ul className="page-list">
              <li>Residir en la zona de actuación o alrededores (Boadilla del Monte y entorno).</li>
              <li>Compromiso para mantener la acogida durante el tiempo acordado.</li>
              <li>Disponibilidad para revisiones veterinarias y posibles visitas de adoptantes.</li>
              <li>Un entorno adecuado y seguro, adaptado a la especie y tamaño del animal.</li>
              <li>Capacidad para asumir el proceso con responsabilidad, incluso si se prolonga más de lo previsto.</li>
            </ul>
            <span className="page-text">
              No buscamos soluciones puntuales. Buscamos estabilidad.
            </span>
          </section>

          <section className='page-section'>
            <h2 className="page-section-title">Lo que no es una casa de acogida</h2>
            <span className="page-text">
              Para evitar malentendidos:
            </span>
            <ul className="page-list">
              <li>No es una prueba antes de adoptar.</li>
              <li>No es una solución de fin de semana.</li>
              <li>No es una decisión impulsiva.</li>
            </ul>
            <span className="page-text">
              Es una colaboración responsable dentro de un proyecto estructurado.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo empezar?</h2>
            <span className="page-text">
              Si consideras que puedes asumir una acogida con compromiso real, ponte en contacto con nosotros.
            </span>
            <span className="page-text">
              Te explicaremos el proceso, resolveremos tus dudas y valoraremos contigo si encaja con tu situación actual.
            </span>
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
