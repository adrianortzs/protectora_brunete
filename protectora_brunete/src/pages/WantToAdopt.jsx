import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import adoptImg from '../assets/1.png'
import './pages.css'

function WantToAdopt() {
  usePageTitle('En adopción')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Antes de adoptar, detente un momento</h1>
            <span className="page-hero-text">
              Adoptar no es un gesto puntual. Es una decisión estructural en tu vida y en la del animal. Implica tiempo, estabilidad y responsabilidad real.
            </span>
            <span className="page-hero-text">
              Antes de dar el paso, es necesario valorar con honestidad si puedes asumir ese compromiso durante toda su vida. Un animal no se adapta a una etapa. Se integra en un proyecto de vida.
            </span>
          </div>
        </section>

        <div className="page-container page-container--wide">
          <section className="page-section">
            <h2 className="page-section-title">¿Qué implica adoptar?</h2>
            <span className="page-text">
              Adoptar significa ofrecer un entorno estable y asumir un compromiso a largo plazo.
            </span>
            <span className="page-text">
              No se trata solo de cambiar la vida de un animal. Se trata de sostener esa decisión en el tiempo, incluso cuando las circunstancias personales cambian.
            </span>
            <span className="page-text">
              Los animales que atendemos permanecen de forma temporal en el centro. Su destino no es el refugio, es un hogar equilibrado donde puedan vincularse y desarrollarse con seguridad.
            </span>
            <span className="page-text">
              La fase de adopción comienza una vez cumplido el plazo legal correspondiente, tras confirmar su estado sanitario y realizar la valoración conductual.
            </span>
            <span className="page-text">
              Desde ese momento, permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada. No aceleramos procesos. Priorizamos compatibilidad.
            </span>
            <span className="page-text">
              Realizamos acompañamiento antes y después de la adopción. La integración no termina el día que el animal sale del centro.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Proceso de adopción</h2>
            <span className="page-text">
              La adopción comienza solicitando cita previa por correo electrónico. El proceso se desarrolla en cuatro fases:
            </span>

            <div className="adopt-timeline">
              <article className="adopt-timeline-step">
                <div className="adopt-timeline-marker">
                  <i className="bi bi-calendar-event" aria-hidden="true"></i>
                </div>
                <div className="adopt-timeline-body">
                  <h4 className="adopt-timeline-title">Primer contacto</h4>
                  <span className="adopt-timeline-desc">
                    La familia interesada acude al centro para conocer a los animales. Es importante que asistan todas las personas que convivirán con él.
                  </span>
                </div>
              </article>

              <article className="adopt-timeline-step">
                <div className="adopt-timeline-marker">
                  <i className="bi bi-chat-square-text" aria-hidden="true"></i>
                </div>
                <div className="adopt-timeline-body">
                  <h4 className="adopt-timeline-title">Entrevista</h4>
                  <span className="adopt-timeline-desc">
                    Valoramos experiencia previa, entorno de la vivienda, disponibilidad y expectativas. No evaluamos por desconfianza, sino para garantizar bienestar.
                  </span>
                </div>
              </article>

              <article className="adopt-timeline-step">
                <div className="adopt-timeline-marker">
                  <i className="bi bi-people" aria-hidden="true"></i>
                </div>
                <div className="adopt-timeline-body">
                  <h4 className="adopt-timeline-title">Compatibilidad</h4>
                  <span className="adopt-timeline-desc">
                    Si ya convive otro perro en el hogar, realizamos una valoración conjunta. Prevenir conflictos de convivencia es parte del proceso.
                  </span>
                </div>
              </article>

              <article className="adopt-timeline-step">
                <div className="adopt-timeline-marker">
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                </div>
                <div className="adopt-timeline-body">
                  <h4 className="adopt-timeline-title">Formalización y seguimiento</h4>
                  <span className="adopt-timeline-desc">
                    Una vez formalizada la adopción, realizamos seguimiento para acompañar la adaptación. La responsabilidad no termina con la firma.
                  </span>
                </div>
              </article>
            </div>
          </section>

          <div className="page-grid-2col">
            <section className="page-card">
              <h2 className="page-card-title">Cuestiones clave antes de decidir</h2>
              <span className="page-text">
                Antes de adoptar, conviene considerar:
              </span>
              <ul className="page-list">
                <li>La decisión debe ser consensuada por todas las personas del hogar.</li>
                <li>Perros y gatos pueden vivir alrededor de 15 años.</li>
                <li>Las circunstancias personales cambian; el compromiso debe mantenerse.</li>
                <li>Implica tiempo diario: paseos, atención, educación, acompañamiento.</li>
                <li>No es una solución temporal ni una respuesta emocional.</li>
              </ul>
              <span className="page-text">
                Adoptar es asumir estabilidad para otro ser vivo
              </span>
            </section>

            <section className="page-card">
              <h2 className="page-card-title">Requisitos para adoptar</h2>
              <span className="page-text">
                La adopción se realiza conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid.
              </span>
              <span className="page-text">
                Requisitos básicos:
              </span>
              <ul className="page-list">
                <li>Ser mayor de edad.</li>
                <li>Presentar DNI o pasaporte en vigor.</li>
                <li>Firmar el contrato de adopción.</li>
                <li>En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.</li>
              </ul>
              <span className="page-text">
                El contrato incluye:
              </span>
              <ul className="page-list">
                <li>Información detallada sobre el estado sanitario.</li>
                <li>Asunción de costes de identificación, esterilización y tratamientos.</li>
                <li>Registro del animal en el censo municipal correspondiente.</li>
              </ul>
              <span className="page-text">
                La adopción no es un trámite rápido. Es una decisión formal y responsable.
              </span>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToAdopt
