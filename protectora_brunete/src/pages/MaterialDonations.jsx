import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const HERO_PARAGRAPHS = ['Mantas, camas, pienso, material veterinario... Toda ayuda aporta.']

const INTRO_PARAGRAPHS = ['En Arat Adopta no aceptamos donaciones económicas.', 'Elegimos trabajar exclusivamente con donaciones de recursos porque nos permiten cubrir necesidades reales, concretas y verificables dentro del centro de acogida.', 'Cada aportación tiene un destino claro y un impacto directo en el bienestar diario de los animales.']

const WHY_RESOURCE_DONATIONS = ['Gestionamos nuestro propio centro y priorizamos una estructura sencilla y transparente.', 'Las donaciones de recursos nos permiten:', 'No es una limitación. Es una decisión responsable.']

const WHY_LIST = ['Responder a necesidades específicas.', 'Evitar acumulación de fondos sin destino inmediato.', 'Mantener una gestión directa y centrada en el cuidado diario.']

const MATERIAL_NEEDS = ['Mantas y camas para su descanso.', 'Comida (pienso para perros y gatos).', 'Material veterinario básico como gasas o vendas.', 'Correas, arneses y transportines para paseos y traslados.', 'Toallas y sábanas en buen estado.', 'Juguetes y material de enriquecimiento adecuados para perros y gatos.']

const DONATION_CONDITIONS = ['El material debe estar en buen estado.', 'No aceptamos productos caducados.', 'Confirmamos previamente qué necesitamos en cada momento.']

const HOW_TO_DONATE = ['Si quieres colaborar, ponte en contacto con nosotros antes de realizar la entrega.', 'Te indicaremos qué necesitamos en ese momento y cómo hacerlo llegar directamente al centro de acogida.', 'Valoramos las donaciones útiles, no acumulativas.']

function MaterialDonations() {
  usePageTitle('Donaciones materiales')
  return (
    <div>
      <Header />
      <main className="page page--material-donations">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Donaciones de recursos</h1>
            {HERO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            {INTRO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-box-seam page-section-icon"></i>
              ¿Por qué solo donaciones de recursos?
            </h2>
            <p className="page-text">{WHY_RESOURCE_DONATIONS[0]}</p>
            <p className="page-text">{WHY_RESOURCE_DONATIONS[1]}</p>
            <ul className="page-list page-list--highlight">
              {WHY_LIST.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">{WHY_RESOURCE_DONATIONS[2]}</p>
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              ¿Qué necesitamos?
            </h2>
            <p className="page-text">
              El material que utilizamos de forma habitual incluye:
            </p>
            <ul className="page-list page-list--highlight">
              {MATERIAL_NEEDS.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              Las necesidades pueden variar según el momento y el número de animales acogidos.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Condiciones de las donaciones</h2>
            <p className="page-text">
              Para garantizar el bienestar y la seguridad de los animales:
            </p>
            <ul className="page-list">
              {DONATION_CONDITIONS.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <p className="page-text">
              Esto nos permite gestionar el espacio y los recursos con criterio.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo hacer una donación de material?</h2>
            {HOW_TO_DONATE.map((paragraph) => (<p key={paragraph} className="page-text">{paragraph}</p>))}
            <div className="page-cta-wrap">
              <Link to="/contacto?asunto=Donación de material&mensaje=Hola, me gustaría donar material para el centro de acogida. ¿Qué necesitáis actualmente? ¿Cómo puedo ayudaros? #contact-form" className="page-cta">Quiero donar recursos</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MaterialDonations
