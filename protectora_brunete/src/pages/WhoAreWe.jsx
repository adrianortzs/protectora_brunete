import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WhoAreWe() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">¿Quiénes somos?</h1>
            <span className="collab-hero-text">Arat Adopta nace en 20XX con el compromiso de luchar por los animales y su bienestar. Somos una protectora independiente con centros de acogida propios. </span>
            <span className="collab-hero-text">Colaboramos con la administración pero nuestras decisiones responden a un principio claro: el bienestar de cada animal por encima de la gestión automática.</span>
            <span className="collab-hero-text">Buscamos familias responsables que quieran darles una segunda oportunidad.</span>
          </div>
        </section>

        <div className="collab-container collab-container--wide">
          <section className="collab-intro-centered">
            <span className="collab-text">
              Somos la entidad que presta el servicio de <strong>Protección y Bienestar de los Animales Domésticos</strong> en el municipio de Boadilla del Monte, en colaboración con su Ayuntamiento.
            </span>
            <span className="collab-text">
              Gestionamos nuestro propio centro de acogida y trabajamos con estructura, protocolos y equipo profesional.
            </span>
            <span className="collab-text">
              No somos un recurso improvisado ni un espacio de tránsito. Somos un proyecto con responsabilidad técnica y capacidad de decisión.
            </span>
            <span className="collab-text">
              Cada actuación se valora caso por caso. No gestionamos números. Protegemos individuos.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué hacemos?</h2>
            <div className="collab-cards-grid">
              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Protección y atención</h3>
                <span className="collab-mini-card-text">
                  Intervenimos ante animales domésticos perdidos, abandonados o heridos dentro del municipio. Evaluamos cada situación y proporcionamos la atención veterinaria y el seguimiento que requiera.
                </span>
                <span className="collab-mini-card-text">
                  Actuar no es recoger sin criterio. Es intervenir con responsabilidad.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Adopción responsable</h3>
                <span className="collab-mini-card-text">
                  Buscamos hogares adecuados, estables y coherentes con las necesidades de cada animal.
                </span>
                <span className="collab-mini-card-text">
                  La adopción no es una salida rápida. Es una decisión meditada que debe garantizar convivencia y bienestar a largo plazo.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Control de colonias felinas</h3>
                <span className="collab-mini-card-text">
                  Aplicamos el protocolo C.E.R. (captura, esterilización y retorno) como método ético y eficaz de control poblacional.
                </span>
                <span className="collab-mini-card-text">
                  Trabajamos desde la planificación y la coordinación, no desde la improvisación.
                </span>
              </article>

              <article className="collab-mini-card">
                <h3 className="collab-mini-card-title">Servicio 24 horas</h3>
                <span className="collab-mini-card-text">
                  El servicio está operativo los 365 días del año, las 24 horas, para atender incidencias dentro del municipio.
                </span>
                <span className="collab-mini-card-text">
                  Disponibilidad no significa saturación. Significa organización.
                </span>
              </article>
            </div>
          </section>

          <section className="collab-card collab-card--accent">
            <h2 className="collab-card-title">Centro de acogida</h2>
            <span className="collab-text">
              Contamos con un centro de acogida autorizado por la Comunidad de Madrid.
            </span>
            <span className="collab-text">
              Cada animal recibe:
            </span>
            <ul className="collab-icon-list">
              <li>Atención veterinaria completa.</li>
              <li>Identificación y registro oficial.</li>
              <li>Vacunación, desparasitación y esterilización.</li>
              <li>Evaluación conductual y trabajo de adaptación para favorecer una convivencia equilibrada.</li>
            </ul>
            <span className="collab-text">
              Número de registro: ES280261000001
            </span>
            <span className="collab-text">
              Nuestro centro no es un depósito. Es un espacio de recuperación y preparación para una nueva etapa.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Nuestro equipo</h2>
            <span className="collab-text">
              El servicio está formado por profesionales con experiencia acreditada:
            </span>
            <ul className="collab-list">
              <li>Cuidadores de animales</li>
              <li>Auxiliares veterinarios</li>
              <li>Veterinarios especialistas en etología y medicina médico-quirúrgica</li>
              <li>Personal administrativo</li>
            </ul>
            <span className="collab-text">
              La vocación es importante. La formación también.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Nuestro compromiso</h2>
            <span className="collab-text">
              Trabajamos con objetivos concretos:
            </span>
            <ul className="collab-list">
              <li>Fomentar la tenencia responsable.</li>
              <li>Prevenir el abandono y el maltrato animal.</li>
              <li>Impulsar adoppciones coherentes y estables.</li>
              <li>Gestionar colonias felinas de forma ética.</li>
              <li>Garantizar atención veterinaria integral.</li>
            </ul>
            <span className="collab-text">
              Creemos en un modelo de protección animal eficaz, estructurado y sostenible.
            </span>
            <span className="collab-text">
              La sensibilidad es necesaria. El criterio, imprescindible.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
