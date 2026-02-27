import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const INTRO_PARAGRAPHS = ['Es necesario valorar con honestidad si puedes asumir ese compromiso durante toda su vida. Un animal no se adapta a una etapa. Se integra en un proyecto de vida.']

const WHAT_IT_IMPLIES = ['Adoptar no es un gesto puntual. Es una decisión estructural en tu vida y en la del animal. Implica tiempo, estabilidad y responsabilidad real.', 'No se trata solo de cambiar la vida de un animal. Se trata de sostener esa decisión en el tiempo, incluso cuando las circunstancias personales cambian.', 'Los animales que atendemos permanecen de forma temporal en el centro. Su destino no es el refugio, es un hogar equilibrado donde puedan vincularse y desarrollarse con seguridad.', 'La fase de adopción comienza una vez cumplido el plazo legal correspondiente, tras confirmar su estado sanitario y realizar la valoración conductual.', 'Desde ese momento, permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada. No aceleramos procesos. Priorizamos compatibilidad.', 'Realizamos acompañamiento antes y después de la adopción. La integración no termina el día que el animal sale del centro.']

const ADOPTION_STEPS = [
  {
    title: 'Primer contacto',
    icon: 'bi-calendar-event',
    description: 'La familia interesada acude al centro para conocer a los animales. Es importante que asistan todas las personas que convivirán con él.'
  },
  {
    title: 'Entrevista',
    icon: 'bi-chat-square-text',
    description: 'Valoramos experiencia previa, entorno de la vivienda, disponibilidad y expectativas. No evaluamos por desconfianza, sino para garantizar bienestar.'
  },
  {
    title: 'Compatibilidad',
    icon: 'bi-people',
    description: 'Si ya convive otro perro en el hogar, realizamos una valoración conjunta. Prevenir conflictos de convivencia es parte del proceso.'
  },
  {
    title: 'Formalización y seguimiento',
    icon: 'bi-check2-circle',
    description: 'Una vez formalizada la adopción, realizamos seguimiento para acompañar la adaptación. La responsabilidad no termina con la firma.'
  }
]

const KEY_QUESTIONS = ['La decisión debe ser consensuada por todas las personas del hogar.', 'Perros y gatos pueden vivir alrededor de 15 años.', 'Las circunstancias personales cambian; el compromiso debe mantenerse.', 'Implica tiempo diario: paseos, atención, educación, acompañamiento.', 'No es una solución temporal ni una respuesta emocional.']

const BASIC_REQUIREMENTS = ['Ser mayor de edad.', 'Presentar DNI o pasaporte en vigor.', 'Firmar el contrato de adopción.', 'En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.']

const CONTRACT_INCLUDES = ['Información detallada sobre el estado sanitario.', 'Asunción de costes de identificación, esterilización y tratamientos.', 'Registro del animal en el censo municipal correspondiente.']

function WantToAdopt() {
  usePageTitle('En adopción')
  return (
    <div>
      <Header />
      <main className="page page--adopt">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Antes de adoptar, detente un momento</h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container page-container--wide">
          <section className="page-section">
            <h2 className="page-section-title">¿Qué implica adoptar?</h2>
            {WHAT_IT_IMPLIES.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Proceso de adopción</h2>
            <p className="page-text">
              La adopción comienza solicitando cita previa por correo electrónico. El proceso se desarrolla en cuatro fases:
            </p>

            <div className="adopt-timeline">
              {ADOPTION_STEPS.map((step) => (
                <article key={step.title} className="adopt-timeline-step">
                  <div className="adopt-timeline-marker">
                    <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="adopt-timeline-body">
                    <h4 className="adopt-timeline-title">{step.title}</h4>
                    <p className="adopt-timeline-desc">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="page-grid-2col">
            <section className="page-section">
              <h2 className="page-section-title">Cuestiones clave antes de decidir</h2>
              <p className="page-text">
                Antes de adoptar, conviene considerar:
              </p>
              <ul className="page-list">
                {KEY_QUESTIONS.map((item) => (<li key={item}>{item}</li>))}
              </ul>
              <p className="page-text">
                Adoptar es asumir estabilidad para otro ser vivo
              </p>
            </section>

            <section className="page-section">
              <h2 className="page-section-title">Requisitos para adoptar</h2>
              <p className="page-text">
                La adopción se realiza conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid.
              </p>
              <p className="page-text">
                Requisitos básicos:
              </p>
              <ul className="page-list">
                {BASIC_REQUIREMENTS.map((item) => (<li key={item}>{item}</li>))}
              </ul>
              <p className="page-text">
                El contrato incluye:
              </p>
              <ul className="page-list">
                {CONTRACT_INCLUDES.map((item) => (<li key={item}>{item}</li>))}
              </ul>
              <p className="page-text">
                La adopción no es un trámite rápido. Es una decisión formal y responsable.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToAdopt
