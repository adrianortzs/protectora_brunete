import Header from '../components/Header'
import Footer from '../components/Footer'
import adoptImg from '../assets/1.png'
import './pages.css'

function WantToAdopt() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Antes de adoptar, detente un momento</h1>
            <span className="collab-hero-text">
              Adoptar no es un gesto puntual. Es una decisión estructural en tu vida y en la del animal.
            </span>
            <span className="collab-hero-text">
              Implica tiempo, estabilidad y responsabilidad real.
            </span>
            <span className="collab-hero-text">
              Antes de dar el paso, es necesario valorar con honestidad si puedes asumir ese compromiso durante toda su vida.
            </span>
            <span className="collab-hero-text">
              Un animal no se adapta a una etapa. Se integra en un proyecto de vida.
            </span>
          </div>
        </section>

        <div className="collab-container collab-container--wide">
          <div className="collab-grid-2col">
            <section className="collab-section">
              <h2 className="collab-section-title">¿Qué implica adoptar?</h2>
              <span className="collab-text">
                Adoptar significa ofrecer un entorno estable y asumir un compromiso a largo plazo.
              </span>
              <span className="collab-text">
                No se trata solo de cambiar la vida de un animal. Se trata de sostener esa decisión en el tiempo, incluso cuando las circunstancias personales cambian.
              </span>
              <span className="collab-text">
                Los animales que atendemos permanecen de forma temporal en el centro. Su destino no es el refugio, es un hogar equilibrado donde puedan vincularse y desarrollarse con seguridad.
              </span>
              <span className="collab-text">
                La fase de adopción comienza una vez cumplido el plazo legal correspondiente, tras confirmar su estado sanitario y realizar la valoración conductual.
              </span>
              <span className="collab-text">
                Desde ese momento, permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada. No aceleramos procesos. Priorizamos compatibilidad.
              </span>
              <span className="collab-text">
                Realizamos acompañamiento antes y después de la adopción. La integración no termina el día que el animal sale del centro.
              </span>
              <div className="collab-section-img-wrap">
                <img src={adoptImg} alt="Adopción responsable" className="collab-section-img" />
              </div>
            </section>

            <section className="collab-section">
              <h2 className="collab-section-title">Proceso de adopción</h2>
              <span className="collab-text">
                La adopción comienza solicitando cita previa por correo electrónico.
              </span>
              <span className="collab-text">
                El proceso se desarrolla en varias fases:
              </span>
              <ol className="collab-steps">
                <li className="collab-step">
                  <h3 className="collab-step-number">1</h3>
                  <div>
                    <h4 className="collab-step-title">Primer contacto</h4>
                    <span className="collab-step-text">
                      La familia interesada acude al centro para conocer a los animales.
                    </span>
                    <span className="collab-step-text">
                      Es importante que asistan todas las personas que convivirán con él. La decisión debe ser compartida.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">2</h3>
                  <div>
                    <h4 className="collab-step-title">Entrevista</h4>
                    <span className="collab-step-text">
                      Un miembro del equipo realiza una entrevista para valorar:
                    </span>
                    <ul className="collab-list">
                      <li>Experiencia previa.</li>
                      <li>Entorno y condiciones de la vivienda.</li>
                      <li>Disponibilidad real.</li>
                      <li>Expectativas.</li>
                    </ul>
                    <span className="collab-step-text">
                      No evaluamos por desconfianza. Evaluamos para garantizar bienestar.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">3</h3>
                  <div>
                    <h4 className="collab-step-title">Compatibilidad</h4>
                    <span className="collab-step-text">
                      Si ya convive otro perro en el hogar, es imprescindible realizar una valoración conjunta para comprobar la adaptación entre ambos.
                    </span>
                    <span className="collab-step-text">
                      Forzar convivencias genera problemas. Prevenirlos es parte del proceso.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">4</h3>
                  <div>
                    <h4 className="collab-step-title">Formalización y seguimiento</h4>
                    <span className="collab-step-text">
                      Una vez formalizada la adopción, realizamos seguimiento para acompañar la adaptación.
                    </span>
                    <span className="collab-step-text">
                      La responsabilidad no termina con la firma del contrato.
                    </span>
                  </div>
                </li>
              </ol>
            </section>
          </div>

          <div className="collab-grid-2col">
            <section className="collab-card">
              <h2 className="collab-card-title">Cuestiones clave antes de decidir</h2>
              <span className="collab-text">
                Antes de adoptar, conviene considerar:
              </span>
              <ul className="collab-list">
                <li>La decisión debe ser consensuada por todas las personas del hogar.</li>
                <li>Perros y gatos pueden vivir alrededor de 15 años.</li>
                <li>Las circunstancias personales cambian; el compromiso debe mantenerse.</li>
                <li>Implica tiempo diario: paseos, atención, educación, acompañamiento.</li>
                <li>No es una solución temporal ni una respuesta emocional.</li>
              </ul>
              <span className="collab-text">
                Adoptar es asumir estabilidad para otro ser vivo
              </span>
            </section>

            <section className="collab-card">
              <h2 className="collab-card-title">Requisitos para adoptar</h2>
              <span className="collab-text">
                La adopción se realiza conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid.
              </span>
              <span className="collab-text">
                Requisitos básicos:
              </span>
              <ul className="collab-list">
                <li>Ser mayor de edad.</li>
                <li>Presentar DNI o pasaporte en vigor.</li>
                <li>Firmar el contrato de adopción.</li>
                <li>En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.</li>
              </ul>
              <span className="collab-text">
                El contrato incluye:
              </span>
              <ul className="collab-list">
                <li>Información detallada sobre el estado sanitario.</li>
                <li>Asunción de costes de identificación, esterilización y tratamientos.</li>
                <li>Registro del animal en el censo municipal correspondiente.</li>
              </ul>
              <span className="collab-text">
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
