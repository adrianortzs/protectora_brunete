import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WantToAdopt() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Antes de adoptar, ten en cuenta...</h1>
            <span className="collab-hero-text">
              Adoptar un perro o un gato es una decisión importante, tanto para la persona que adopta como, sobre todo, para el animal.
            </span>
            <span className="collab-hero-text">
              La adopción implica cambios reales en la rutina, el hogar y las prioridades. Por eso, antes de dar el paso, es fundamental informarse sobre el carácter, las necesidades y el momento vital de cada animal.
            </span>
            <span className="collab-hero-text">
              Adoptar no es un gesto puntual: es un compromiso responsable durante toda la vida del animal.
            </span>
          </div>
        </section>

        <div className="collab-container collab-container--wide">
          <div className="collab-grid-2col">
            <section className="collab-section">
              <h2 className="collab-section-title">¿Qué implica adoptar?</h2>
              <span className="collab-text">
                Adoptar un animal significa ofrecerle un hogar estable y asumir un compromiso real a largo plazo. Al hacerlo, no solo cambias la vida de tu nuevo compañero, sino que también permites que otro animal rescatado pueda ocupar su lugar en nuestro centro de acogida.
              </span>
              <span className="collab-text">
                Los animales que atendemos se encuentran de forma temporal en el centro. Su destino ideal es un entorno familiar donde puedan integrarse, desarrollar vínculos y vivir con estabilidad.
              </span>
              <span className="collab-text">
                La fase de adopción comienza una vez transcurrido el plazo legal correspondiente, tras confirmar su estado de salud y evaluar su comportamiento. Desde ese momento, los animales permanecen con nosotros el tiempo necesario hasta encontrar una familia adecuada para ellos.
              </span>
              <span className="collab-text">
                Para favorecer una adopción responsable, realizamos un seguimiento y acompañamiento antes y después de la adopción, asegurando una correcta adaptación tanto del animal como de su nueva familia.
              </span>
            </section>

            <section className="collab-section">
              <h2 className="collab-section-title">Proceso de adopción</h2>
              <span className="collab-text">
                La adopción comienza solicitando una cita previa por correo electrónico. A partir de ese momento, el proceso se desarrolla en varias fases:
              </span>
              <ol className="collab-steps">
                <li className="collab-step">
                  <h3 className="collab-step-number">1</h3>
                  <div>
                    <h4 className="collab-step-title">Primer contacto</h4>
                    <span className="collab-step-text">
                      La familia interesada acude al centro para conocer a los animales y valorar la adopción. Es importante que asistan todas las personas que convivirán con el animal.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">2</h3>
                  <div>
                    <h4 className="collab-step-title">Entrevista</h4>
                    <span className="collab-step-text">
                      Una persona del equipo realiza una entrevista para conocer la experiencia previa con animales, el entorno y las condiciones de la vivienda, así como la disponibilidad y expectativas de la familia.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">3</h3>
                  <div>
                    <h4 className="collab-step-title">Compatibilidad</h4>
                    <span className="collab-step-text">
                      Si ya convive otro perro en el hogar, es necesario que también acuda al centro para valorar la compatibilidad entre ambos animales.
                    </span>
                  </div>
                </li>
                <li className="collab-step">
                  <h3 className="collab-step-number">4</h3>
                  <div>
                    <h4 className="collab-step-title">Adopción y seguimiento</h4>
                    <span className="collab-step-text">
                      Una vez formalizada la adopción, realizamos un seguimiento para acompañar la adaptación del animal y su nueva familia.
                    </span>
                  </div>
                </li>
              </ol>
            </section>
          </div>

          <div className="collab-grid-2col">
            <section className="collab-card">
              <h2 className="collab-card-title">Algunas cuestiones clave</h2>
              <ul className="collab-list">
                <li>La adopción debe ser una decisión consensuada por todas las personas que conviven en el hogar.</li>
                <li>Perros y gatos viven, de media, alrededor de 15 años. Las circunstancias cambian, y el animal también puede necesitar cuidados específicos.</li>
                <li>Adoptar implica disponer de tiempo y estabilidad para atender sus necesidades diarias: paseos, atención, educación y acompañamiento.</li>
                <li>Adoptar significa ofrecer un hogar estable para siempre, no solo en momentos puntuales.</li>
              </ul>
            </section>

            <section className="collab-card">
              <h2 className="collab-card-title">Requisitos para adoptar</h2>
              <span className="collab-text">
                La adopción se realiza conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid:
              </span>
              <ul className="collab-list collab-list--inline">
                <li>Ser mayor de edad.</li>
                <li>Presentar DNI y/o pasaporte en vigor.</li>
                <li>Firmar el contrato de adopción.</li>
                <li>En el caso de animales potencialmente peligrosos, disponer de la licencia correspondiente.</li>
              </ul>
              <span className="collab-text">
                La adopción implica aceptar las condiciones del contrato, que incluyen:
              </span>
              <ul className="collab-list collab-list--inline">
                <li>Información detallada sobre el estado sanitario del animal.</li>
                <li>Asunción de los costes de tratamientos, identificación y esterilización.</li>
                <li>Registro del animal en el censo municipal correspondiente.</li>
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
