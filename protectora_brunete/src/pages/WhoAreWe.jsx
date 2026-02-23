import usePageTitle from '../hooks/usePageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function WhoAreWe() {
  usePageTitle('Quiénes somos')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Quiénes somos?</h1>
            <span className="page-hero-text">
              Arat Adopta nace en 20XX con el compromiso de luchar por los animales y su bienestar. Somos una protectora independiente con centros de acogida propios.  
            </span>
          </div>
        </section>

        <div className="page-container page-container--wide">
          <section className="page-intro-centered">
            <span className="page-text">
              Somos la entidad que presta el servicio de <strong>Protección y Bienestar de los Animales Domésticos</strong> en el municipio de Boadilla del Monte, en colaboración con su Ayuntamiento.
            </span>
            <span className="page-text">
              Gestionamos nuestro propio centro de acogida y trabajamos con estructura, protocolos y equipo profesional.
            </span>
            <span className="page-text">
              Colaboramos con la administración pero nuestras decisiones responden a un principio claro: el bienestar de cada animal por encima de la gestión automática.
            </span>
            <span className="page-text">
              No somos un recurso improvisado ni un espacio de tránsito. Somos un proyecto con responsabilidad técnica y capacidad de decisión.
            </span>
            <span className="page-text">
              Cada actuación se valora caso por caso. No gestionamos números. Protegemos individuos. Buscamos familias responsables que quieran darles una segunda oportunidad.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Qué hacemos?</h2>
            <div className="page-cards-grid">
              <article className="page-mini-card">
                <h3 className="page-mini-card-title">Protección y atención</h3>
                <span className="page-mini-card-text">
                  Intervenimos ante animales domésticos perdidos, abandonados o heridos dentro del municipio. Evaluamos cada situación y proporcionamos la atención veterinaria y el seguimiento que requiera.
                </span>
                <span className="page-mini-card-text">
                  Actuar no es recoger sin criterio. Es intervenir con responsabilidad.
                </span>
              </article>

              <article className="page-mini-card">
                <h3 className="page-mini-card-title">Adopción responsable</h3>
                <span className="page-mini-card-text">
                  Buscamos hogares adecuados, estables y coherentes con las necesidades de cada animal.
                </span>
                <span className="page-mini-card-text">
                  La adopción no es una salida rápida. Es una decisión meditada que debe garantizar convivencia y bienestar a largo plazo.
                </span>
              </article>

              <article className="page-mini-card">
                <h3 className="page-mini-card-title">Control de colonias felinas</h3>
                <span className="page-mini-card-text">
                  Aplicamos el protocolo C.E.R. (captura, esterilización y retorno) como método ético y eficaz de control poblacional.
                </span>
                <span className="page-mini-card-text">
                  Trabajamos desde la planificación y la coordinación, no desde la improvisación.
                </span>
              </article>

              <article className="page-mini-card">
                <h3 className="page-mini-card-title">Servicio 24 horas</h3>
                <span className="page-mini-card-text">
                  El servicio está operativo los 365 días del año, las 24 horas, para atender incidencias dentro del municipio.
                </span>
                <span className="page-mini-card-text">
                  Disponibilidad no significa saturación. Significa organización.
                </span>
              </article>
            </div>
          </section>

          <section className="page-card page-card--accent">
            <h2 className="page-card-title">Centro de acogida</h2>
            <span className="page-text">
              Contamos con un centro de acogida autorizado por la Comunidad de Madrid.
            </span>
            <span className="page-text">
              Cada animal recibe:
            </span>
            <ul className="page-icon-list">
              <li>Atención veterinaria completa.</li>
              <li>Identificación y registro oficial.</li>
              <li>Vacunación, desparasitación y esterilización.</li>
              <li>Evaluación conductual y trabajo de adaptación para favorecer una convivencia equilibrada.</li>
            </ul>
            <span className="page-text">
              Número de registro: ES280261000001
            </span>
            <span className="page-text">
              Nuestro centro no es un depósito. Es un espacio de recuperación y preparación para una nueva etapa.
            </span>
          </section>

          <div className="page-grid-2col">
            <section className="page-section">
              <h2 className="page-section-title">Nuestro compromiso</h2>
              <span className="page-text">
                Trabajamos con objetivos concretos:
              </span>
              <ul className="page-list">
                <li>Fomentar la tenencia responsable.</li>
                <li>Prevenir el abandono y el maltrato animal.</li>
                <li>Impulsar adopciones coherentes y estables.</li>
                <li>Gestionar colonias felinas de forma ética.</li>
                <li>Garantizar atención veterinaria integral.</li>
              </ul>
              <span className="page-text">
                Creemos en un modelo de protección animal eficaz, estructurado y sostenible.
              </span>
              <span className="page-text">
                La sensibilidad es necesaria. El criterio, imprescindible.
              </span>
            </section>

            <section className="page-section">
              <h2 className="page-section-title">Nuestro equipo</h2>
              <span className="page-text">
                El servicio está formado por profesionales con experiencia acreditada:
              </span>
              <ul className="page-list">
                <li>Cuidadores de animales</li>
                <li>Auxiliares veterinarios</li>
                <li>Veterinarios especialistas en etología y medicina médico-quirúrgica</li>
                <li>Personal administrativo</li>
              </ul>
              <span className="page-text">
                La vocación es importante. La formación también.
              </span>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
