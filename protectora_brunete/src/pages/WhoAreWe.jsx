import Header from '../components/Header'
import Footer from '../components/Footer'
import './WhoAreWe.css'

function WhoAreWe() {
  return (
    <div>
      <Header />
      <main className="who-are-we-page">
        <div className="who-are-we-container">
          <section className="who-are-we-intro">
            <h1 className="who-are-we-page-title">¿Quiénes somos?</h1>
            <span className="who-are-we-text">Somos una entidad que presta el servicio de Protección y Bienestar de los Animales Domésticos en el municipio de Boadilla del Monte, en colaboración con su Ayuntamiento.</span>
            <span className="who-are-we-text">Nuestro trabajo se centra en la atención, protección y gestión responsable de animales domésticos, con el bienestar animal como eje principal de todas nuestras decisiones.</span>
          </section>

          <section className="who-are-we-section">
            <h2 className="who-are-we-section-title">¿Qué hacemos?</h2>

            <div className="who-are-we-block">
              <h3 className="who-are-we-block-title">Protección y recogida</h3>
              <span className="who-are-we-text">Realizamos la recogida de animales domésticos perdidos, abandonados o heridos que aparecen en el municipio, proporcionándoles los cuidados necesarios y la atención veterinaria que requieran.</span>
            </div>

            <div className="who-are-we-block">
              <h3 className="who-are-we-block-title">Centro de acogida</h3>
              <span className="who-are-we-text">El servicio cuenta con un centro de acogida animal autorizado por la Comunidad de Madrid, inscrito con el número de registro <strong>ES280261000001</strong>.</span>
              <span className="who-are-we-text">En el centro:</span>
              <ul className="who-are-we-list">
                <li>Los animales reciben atención veterinaria completa.</li>
                <li>Son identificados, vacunados, desparasitados y esterilizados.</li>
                <li>Se trabaja su educación y adaptación para favorecer una convivencia equilibrada.</li>
              </ul>
            </div>

            <div className="who-are-we-block">
              <h3 className="who-are-we-block-title">Adopción</h3>
              <span className="who-are-we-text">Promovemos la adopción responsable de perros y gatos acogidos en el centro. Nuestro objetivo es que cada animal encuentre un hogar adecuado, donde pueda integrarse de forma estable y segura.</span>
            </div>

            <div className="who-are-we-block">
              <h3 className="who-are-we-block-title">Control de colonias felinas</h3>
              <span className="who-are-we-text">Gestionamos las colonias de gatos asilvestrados y vagabundos mediante el protocolo <strong>C.E.R.</strong> (captura, esterilización y retorno), una medida eficaz y respetuosa para el control poblacional y el bienestar de los animales.</span>
            </div>

            <div className="who-are-we-block">
              <h3 className="who-are-we-block-title">Servicio 24 horas</h3>
              <span className="who-are-we-text">El servicio está disponible los 365 días del año, las 24 horas, para atender las necesidades que puedan surgir en el municipio.</span>
            </div>
          </section>

          <section className="who-are-we-section">
            <h2 className="who-are-we-section-title">Acerca del equipo</h2>
            <span className="who-are-we-text">Está formado por profesionales con experiencia y vocación:</span>
            <ul className="who-are-we-list who-are-we-team-list">
              <li>Cuidadores de animales</li>
              <li>Auxiliares veterinarios</li>
              <li>Veterinarios especialistas (etólogos y médico-quirúrgicos)</li>
              <li>Personal administrativo</li>
            </ul>
          </section>

          <section className="who-are-we-section who-are-we-commitment">
            <h2 className="who-are-we-section-title">Nuestro compromiso</h2>
            <span className="who-are-we-text">El trabajo diario se rige por unas directrices claras:</span>
            <ul className="who-are-we-list who-are-we-commitment-list">
              <li>Fomento de la tenencia responsable.</li>
              <li>Prevención del abandono y del maltrato animal.</li>
              <li>Impulso de la adopción responsable.</li>
              <li>Control ético de colonias felinas mediante esterilización.</li>
              <li>Atención veterinaria integral y educación de los animales acogidos.</li>
            </ul>
            <span className="who-are-we-closing">Creemos en un modelo de protección animal eficaz, responsable y orientado al bienestar real, no solo a la gestión.</span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
