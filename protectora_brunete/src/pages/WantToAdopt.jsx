import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WantToAdopt() {
  return (
    <div>
      <Header />
      <main className="wta-page">
        <div className="wta-container">
          <section className="wta-intro">
            <h1 className="wta-title">
              Antes de adoptar, ten en cuenta...
            </h1>
            <span className="wta-text">
              Adoptar un perro o un gato es una decisión importante, tanto para la persona que adopta como, sobre todo, para el animal.
            </span>
            <span className="wta-text">
              La adopción implica cambios reales en la rutina, el hogar y las prioridades. Por eso, antes de dar el paso, es fundamental informarse sobre el carácter, las necesidades y el momento vital de cada animal.
            </span>
            <span className="wta-text">
              Adoptar no es un gesto puntual: es un compromiso responsable durante toda la vida del animal.
            </span>
          </section>

          <div className="wta-sections-row">
            <section className="wta-section">
              <h2 className="wta-section-title">
                ¿Qué implica adoptar?
              </h2>
              <span className="wta-text">
                Adoptar un animal significa ofrecerle un hogar estable y asumir un compromiso real a largo plazo. Al hacerlo, no solo cambias la vida de tu nuevo compañero, sino que también permites que otro animal rescatado pueda ocupar su lugar en nuestro centro de acogida.
              </span>
              <span className="wta-text">
                Los animales que atendemos se encuentran de forma temporal en el centro. Su destino ideal es un entorno familiar donde puedan integrarse, desarrollar vínculos y vivir con estabilidad.
              </span>
              <span className="wta-text">
                La fase de adopción comienza una vez transcurrido el plazo legal correspondiente, tras confirmar su estado de salud y evaluar su comportamiento. Desde ese momento, los animales permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada para ellos.
              </span>
              <span className="wta-text">
                Para favorecer una adopción responsable, realizamos un seguimiento y acompañamiento antes y después de la adopción, asegurando una correcta adaptación tanto del animal como de su nueva familia.
              </span>
            </section>

            <section className="wta-section">
              <h2 className="wta-section-title">
                Proceso de adopción
              </h2>
              <span className="wta-text middle-text">
                La adopción comienza solicitando una cita previa por correo electrónico. A partir de ese momento, el proceso se desarrolla en varias fases:
              </span>
              <ol className="wta-steps">
                <li className="wta-step">
                  <h3 className="wta-step-title">1. Primer contacto</h3>
                  <span className="wta-text">
                    La familia interesada acude al centro para conocer a los animales y valorar la adopción. Es importante que asistan todas las personas que convivirán con el animal.
                  </span>
                </li>
                <li className="wta-step">
                  <h3 className="wta-step-title">2. Entrevista</h3>
                  <span className="wta-text">
                    Una persona del equipo realiza una entrevista para conocer la experiencia previa con animales, el entorno y las condiciones de la vivienda, así como la disponibilidad y expectativas de la familia. En esta fase se explican las condiciones del contrato de adopción y se orienta en la elección del animal más adecuado.
                  </span>
                </li>
                <li className="wta-step">
                  <h3 className='wta-step-title'>3. Compatibilidad</h3>
                  <span className="wta-text">
                    Si ya convive otro perro en el hogar, es necesario que también acuda al centro para valorar la compatibilidad entre ambos animales.
                  </span>
                </li>
                <li className="wta-step">
                  <h3 className="wta-step-title">4. Adopción y seguimiento</h3>
                  <span className="wta-text">
                    Una vez formalizada la adopción, realizamos un seguimiento para acompañar la adaptación del animal y su nueva familia. La duración total del proceso puede variar en función de la disponibilidad del equipo y de cada caso concreto.
                  </span>
                </li>
              </ol>
            </section>
          </div>

          <div className="wta-sections-row">
          <section className="wta-section">
              <h2 className="wta-section-title">
                Algunas cuestiones clave
              </h2>
              <span className="wta-text">
                La adopción debe ser una decisión consensuada por todas las personas que conviven en el hogar. Todas ellas han de comprometerse activamente con el cuidado y la atención del animal.
              </span>
              <span className="wta-text">
                Perros y gatos viven, de media, alrededor de 15 años. Durante ese tiempo, las circunstancias familiares pueden cambiar, y el propio animal también lo hará, pudiendo necesitar cuidados específicos en distintas etapas de su vida.
              </span>
              <span className="wta-text">
                Adoptar implica disponer de tiempo y estabilidad para atender sus necesidades diarias: paseos, atención, educación y acompañamiento.
              </span>
              <span className="wta-text">
                También supone asumir las responsabilidades básicas asociadas a su cuidado y bienestar a lo largo de toda su vida.
              </span>
              <span className="wta-text">
                Adoptar significa ofrecer un hogar estable para siempre, no solo en momentos puntuales.
              </span>
            </section>

            <section className="wta-section">
              <h2 className="wta-section-title">
                Requisitos para adoptar
              </h2>
              <span className="wta-text">
                La adopción se realiza conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid. De forma resumida, estos son los requisitos principales:
              </span>
              <ul className="wta-list">
                <li>Ser mayor de edad.</li>
                <li>Presentar DNI y/o pasaporte en vigor.</li>
                <li>Firmar el contrato de adopción.</li>
                <li>En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.</li>
              </ul>
              <span className="wta-middle-text">
                La adopción implica aceptar las condiciones recogidas en el contrato, entre las que se incluyen:
              </span>
              <ul className="wta-list">
                <li>Información detallada sobre el estado sanitario del animal.</li>
                <li>Asunción de los costes derivados de tratamientos, identificación y esterilización, conforme a la normativa vigente.</li>
                <li>Registro del animal en el censo municipal correspondiente tras la adopción.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WantToAdopt
