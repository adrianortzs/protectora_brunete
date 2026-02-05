import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WhoAreWe() {
  return (
    <div>
      <Header />
      <main className="waw-page">
        <div className="waw-container">
          <section className="waw-intro">
            <h1 className="waw-title">
              ¿Quiénes somos?
            </h1>
            <span className="waw-text">
              Somos la entidad responsable del servicio de Protección y Bienestar de los Animales Domésticos en el municipio de Boadilla del Monte, en colaboración con su Ayuntamiento.
              </span>
            <span className="waw-text">
              Nuestro trabajo se centra en la atención, protección y gestión responsable de animales domésticos, tomando siempre decisiones basadas en un criterio claro: el bienestar real de cada animal.
            </span>
          </section>

          <section className="waw-section">
            <h2 className="waw-section-title">
              ¿Qué hacemos?
            </h2>
            <div className="waw-block">
              <h3 className="waw-block-title">
                Protección y recogida
              </h3>
              <span className="waw-text">
                Atendemos a animales domésticos perdidos, abandonados o heridos que aparecen en el municipio, proporcionándoles los cuidados necesarios y la atención veterinaria que requiera cada caso.
              </span>
            </div>

            <div className="waw-block">
              <h3 className="waw-block-title">
                Centro de acogida
              </h3>
              <span className="waw-text">
                Disponemos de un centro de acogida animal autorizado por la Comunidad de Madrid, inscrito con el número de registro <strong>ES280261000001</strong>.
              </span>
              <span className="waw-text">
                En el centro:
              </span>
              <ul className="waw-list">
                <li>Reciben atención veterinaria completa.</li>
                <li>Son identificados, vacunados, desparasitados y esterilizados.</li>
                <li>Trabajan su educación y adaptación para favorecer una convivencia equilibrada.</li>
              </ul>
            </div>

            <div className="waw-block">
              <h3 className="waw-block-title">
                Adopción responsable
              </h3>
              <span className="waw-text">
                Promovemos la adopción responsable de los perros y gatos acogidos. Nuestro objetivo es que cada animal encuentre un hogar adecuado, estable y seguro, donde pueda integrarse como un miembro más de la familia.
              </span>
            </div>

            <div className="waw-block">
              <h3 className="waw-block-title">
                Control de colonias felinas
              </h3>
              <span className="waw-text">
                Gestionamos las colonias de gatos asilvestrados y vagabundos mediante el protocolo <strong>C.E.R. (captura, esterilización y retorno)</strong>, una medida eficaz, ética y respetuosa para el control poblacional y el bienestar animal.
              </span>
            </div>

            <div className="waw-block">
              <h3 className="waw-block-title">
                Servicio 24 horas
              </h3>
              <span className="waw-text">
                El servicio está operativo los 365 días del año, las 24 horas, para atender las necesidades que puedan surgir en el municipio.
              </span>
            </div>
          </section>

          <section className="waw-section">
            <h2 className="waw-section-title">
              Nuestro equipo
            </h2>
            <span className="waw-text">
              El servicio está formado por profesionales con experiencia y vocación, entre los que se encuentran:
            </span>
            <ul className="waw-list">
              <li>Cuidadores de animales</li>
              <li>Auxiliares veterinarios</li>
              <li>Veterinarios especialistas en etología y medicina médico-quirúrgica</li>
              <li>Personal administrativo</li>
            </ul>
          </section>

          <section className="waw-section">
            <h2 className="waw-section-title">
              Nuestro compromiso
            </h2>
            <span className="waw-text">
              El trabajo diario se rige por unas directrices claras:
            </span>
            <ul className="waw-list">
              <li>Fomentar la tenencia responsable.</li>
              <li>Prevenir el abandono y el maltrato animal.</li>
              <li>Impulsar la adopción responsable.</li>
              <li>Gestionar de forma ética las colonias felinas mediante esterilización.</li>
              <li>Garantizar una atención veterinaria integral y la educación de los animales acogidos.</li>
            </ul>
            <span className="waw-text-closing">
              Creemos en un modelo de protección animal eficaz, responsable y orientado al bienestar, no solo a la gestión.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
