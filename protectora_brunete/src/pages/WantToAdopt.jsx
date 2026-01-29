import Header from '../components/Header'
import Footer from '../components/Footer'
import './WantToAdopt.css'

function WantToAdopt() {
  return (
    <div>
      <Header />
      <main className="want-to-adopt-page">
        <div className="want-to-adopt-container">
          <section className="intro-section">
            <h1 className="page-title">Antes de adoptar, ten en cuenta...</h1>
            <span className="lead-text">Adoptar un perro o un gato es una decisión importante. Lo es para la persona que adopta y, sobre todo, para el animal.</span>
            <span className="lead-text">La adopción implica cambios reales en la rutina, el hogar y las prioridades. Por eso, antes de dar el paso, es fundamental informarse sobre el carácter, las necesidades y el momento vital del animal.</span>
            <span className="lead-text">Adoptar no es un gesto puntual. Es un compromiso responsable durante toda la vida del animal.</span>
          </section>

          <div className="section-row">
            <section className="each-section">
              <h2>¿Qué implica adoptar?</h2>
              <span className="lead-text">Adoptar un animal no es un gesto puntual. Es asumir una responsabilidad real y duradera.</span>
              <span className="lead-text">Los animales que acogemos están de forma temporal en nuestro centro. Su lugar definitivo es un hogar donde puedan integrarse en la vida familiar y recibir la atención que necesitan.</span>
              <span className="lead-text">Antes de iniciar una adopción, cada animal:</span>
              <ul>
                <li>Ha superado el plazo legal establecido.</li>
                <li>Ha sido revisado a nivel sanitario.</li>
                <li>Ha sido evaluado en cuanto a carácter y necesidades.</li>
              </ul>
              <span className="lead-text lead-text-second-last">Permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada. No forzamos adopciones ni trabajamos con plazos.</span>
              <span className="lead-text">Para asegurar que la adaptación sea correcta, realizamos seguimiento y acompañamiento antes y después de la adopción.</span>
            </section>

            <section className="each-section">
              <h2>Algunas cuestiones clave</h2>
              <ul>
                <li>La decisión debe ser consensuada por todas las personas que conviven en el hogar.</li>
                <li>Todos los miembros deben comprometerse a su cuidado y atención.</li>
                <li>Perros y gatos viven, de media, alrededor de 15 años.</li>
                <li>Durante ese tiempo, las circunstancias familiares pueden cambiar.</li>
                <li>El animal también cambia con la edad y puede necesitar cuidados específicos.</li>
                <li>Adoptar significa asumir que tu compañero tendrá su hogar contigo, estés donde estés.</li>
              </ul>
            </section>
          </div>

          <div className="section-row">
            <section className="each-section">
              <h2>Requisitos para adoptar</h2>
              <span className="lead-text">La adopción se realiza conforme a la Ley 4/2016, de Protección de los Animales de Compañía de la Comunidad de Madrid. De forma resumida, los requisitos principales son:</span>
              <ul>
                <li>Ser mayor de edad.</li>
                <li>Presentar DNI y/o pasaporte en vigor.</li>
                <li>Firmar el contrato de adopción.</li>
                <li>En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.</li>
              </ul>
              <span className="lead-text middle-text">Aceptar las condiciones recogidas en el contrato, que incluyen:</span>
              <ul>
                <li>Información sobre el estado sanitario del animal.</li>
                <li>Asunción de los costes derivados de tratamientos, identificación y esterilización, según lo establecido por la ley.</li>
                <li>Registrar al animal en el censo municipal correspondiente tras la adopción.</li>
              </ul>
            </section>

            <section className="each-section">
              <h2>Proceso de adopción</h2>
              <span className="lead-text">La adopción comienza solicitando una cita previa por correo electrónico. A partir de ahí, el proceso se desarrolla en varias fases:</span>
              <ol className="process-steps">
                <li className="process-step">
                  <h3>1. Primer contacto</h3>
                  <span>La familia interesada acude al centro para conocer a los animales y valorar la adopción. Es importante que asistan todas las personas que convivirán con el animal.</span>
                </li>
                <li className="process-step">
                  <h3>2. Entrevista</h3>
                  <span>Uno de los miembros realiza una entrevista para conocer la experiencia previa con animales, el entorno y condiciones de la vivienda, y las expectativas y disponibilidad de la familia. En esta fase se explican las condiciones del contrato de adopción y se orienta en la elección del animal más adecuado.</span>
                </li>
                <li className="process-step">
                  <h3>3. Compatibilidad</h3>
                  <span>Si ya convive otro perro en el hogar, es necesario que acuda al centro para comprobar la compatibilidad entre ambos animales.</span>
                </li>
                <li className="process-step">
                  <h3>4. Adopción y seguimiento</h3>
                  <span>Una vez formalizada la adopción, realizamos un seguimiento para acompañar la adaptación y resolver posibles dudas. El tiempo total del proceso puede variar en función de la disponibilidad del equipo y de cada situación concreta.</span>
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToAdopt
