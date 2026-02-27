import usePageTitle from '../hooks/usePageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

const HERO_PARAGRAPHS = ['Arat Adopta nace en 2017 con el compromiso de luchar por los animales y su bienestar. Somos una protectora independiente con centros de acogida propios.']

const INTRO_PARAGRAPHS = [(<>Somos una entidad que presta el servicio de <strong>Protección y Bienestar de los Animales Domésticos</strong> en colaboración con los ayuntamientos. Colaboramos con la administración pero nuestras decisiones responden a un principio claro: el bienestar de cada animal por encima de la gestión automática.</>),'Gestionamos nuestro propio centro de acogida y trabajamos con estructura, protocolos y equipo profesional. No somos un recurso improvisado ni un espacio de tránsito. Somos un proyecto con responsabilidad técnica y capacidad de decisión. Cada actuación se valora caso por caso. No gestionamos números. Protegemos individuos. Buscamos familias responsables que quieran darles una segunda oportunidad.']

const WHAT_WE_DO = [
  {
    title: 'Protección y atención',
    paragraphs: ['Intervenimos ante animales domésticos perdidos, abandonados o heridos en la zona noroeste de la Comunidad de Madrid. Evaluamos cada situación y proporcionamos la atención veterinaria y el seguimiento que requiera.', 'Actuar no es recoger sin criterio. Es intervenir con responsabilidad.']
  },
  {
    title: 'Adopción responsable',
    paragraphs: ['Buscamos hogares adecuados, estables y coherentes con las necesidades de cada animal.', 'La adopción no es una salida rápida. Es una decisión meditada que debe garantizar convivencia y bienestar a largo plazo.']
  },
  {
    title: 'Control de colonias felinas',
    paragraphs: ['Aplicamos el protocolo C.E.R. (captura, esterilización y retorno) como método ético y eficaz de control poblacional.', 'Trabajamos desde la planificación y la coordinación, no desde la improvisación.']
  },
  {
    title: 'Servicio 24 horas',
    paragraphs: ['El servicio está operativo los 365 días del año, las 24 horas, para atender incidencias dentro del municipio.', 'Disponibilidad no significa saturación. Significa organización.']
  }
]

const COMMITMENT_POINTS = ['Fomentar la tenencia responsable.', 'Prevenir el abandono y el maltrato animal.', 'Impulsar adopciones coherentes y estables.', 'Gestionar colonias felinas de forma ética.', 'Garantizar atención veterinaria integral.']

const TEAM_ROLES = ['Cuidadores de animales', 'Auxiliares veterinarios', 'Veterinarios especialistas en etología y medicina médico-quirúrgica', 'Personal administrativo']

function WhoAreWe() {
  usePageTitle('Quiénes somos')
  return (
    <div>
      <Header />
      <main className="page page--who">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">¿Quiénes somos?</h1>
            {HERO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container">
          <section className="page-intro">
            {INTRO_PARAGRAPHS.map((paragraph, index) => (<p key={index} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Qué hacemos?</h2>
            <div className="page-cards-grid">
              {WHAT_WE_DO.map((item) => (
                <article key={item.title} className="page-mini-card">
                  <h3 className="page-mini-card-title">{item.title}</h3>
                  {item.paragraphs.map((text, index) => (<p key={`${item.title}-${index}`} className="page-mini-card-text">{text}</p>))}
                </article>
              ))}
            </div>
          </section>

          <section className="page-card page-card--accent">
            <h2 className="page-card-title">Centro de acogida</h2>
            <p className="page-text">
              Contamos con un centro de acogida autorizado por la Comunidad de Madrid.
            </p>
            <p className="page-text">
              Cada animal recibe:
            </p>
            <ul className="page-icon-list">
              <li>Atención veterinaria completa.</li>
              <li>Identificación y registro oficial.</li>
              <li>Vacunación, desparasitación y esterilización.</li>
              <li>Evaluación conductual y trabajo de adaptación para favorecer una convivencia equilibrada.</li>
            </ul>
            <p className="page-text">
              Número de registro: ES280261000001
            </p>
            <p className="page-text">
              Nuestro centro no es un depósito. Es un espacio de recuperación y preparación para una nueva etapa.
            </p>
          </section>

          <div className="page-grid-2col">
            <section className="page-section">
              <h2 className="page-section-title">Nuestro compromiso</h2>
              <p className="page-text">
                Trabajamos con objetivos concretos:
              </p>
              <ul className="page-list">
                {COMMITMENT_POINTS.map((point) => (<li key={point}>{point}</li>))}
              </ul>
              <p className="page-text">
                Creemos en un modelo de protección animal eficaz, estructurado y sostenible.
              </p>
              <p className="page-text">
                La sensibilidad es necesaria. El criterio, imprescindible.
              </p>
            </section>

            <section className="page-section">
              <h2 className="page-section-title">Nuestro equipo</h2>
              <p className="page-text">
                El servicio está formado por profesionales con experiencia acreditada:
              </p>
              <ul className="page-list">
                {TEAM_ROLES.map((role) => (<li key={role}>{role}</li>))}
              </ul>
              <p className="page-text">
                La vocación es importante. La formación también.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoAreWe
