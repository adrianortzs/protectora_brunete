import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import donationsImg from '../assets/2.png'
import './pages.css'

function MaterialDonations() {
  usePageTitle('Donaciones materiales')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Donaciones de recursos</h1>
            <span className="page-hero-text">
              Mantas, camas, pienso, material veterinario… Toda ayuda aporta.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <span className="page-text">
              En Arat Adopta no aceptamos donaciones económicas.
            </span>
            <span className="page-text">
              Elegimos trabajar exclusivamente con donaciones de recursos porque nos permiten cubrir necesidades reales, concretas y verificables dentro del centro de acogida.
            </span>
            <span className="page-text">
              Cada aportación tiene un destino claro y un impacto directo en el bienestar diario de los animales.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-box-seam page-section-icon"></i>
              ¿Por qué solo donaciones de recursos?
            </h2>
            <span className="page-text">
              Gestionamos nuestro propio centro y priorizamos una estructura sencilla y transparente.
            </span>
            <span className="page-text">
              Las donaciones de recursos nos permiten:
            </span>
            <ul className="page-list page-list--highlight">
              <li>Responder a necesidades específicas.</li>
              <li>Evitar acumulación de fondos sin destino inmediato.</li>
              <li>Mantener una gestión directa y centrada en el cuidado diario.</li>
            </ul>
            <span className="page-text">
              No es una limitación. Es una decisión responsable.
            </span>
          </section>

          <section className="page-card">
            <h2 className="page-card-title">
              <i className="bi bi-card-checklist page-card-icon"></i>
              ¿Qué necesitamos?
            </h2>
            <span className="page-text">
              El material que utilizamos de forma habitual incluye:
            </span>
            <ul className="page-list page-list--highlight">
              <li><strong>Mantas y camas</strong> para su descanso.</li>
              <li><strong>Comida</strong> (pienso para perros y gatos).</li>
              <li><strong>Material veterinario básico</strong> como gasas o vendas.</li>
              <li><strong>Correas, arneses y transportines</strong> para paseos y traslados.</li>
              <li><strong>Toallas y sábanas</strong> en buen estado.</li>
              <li><strong>Juguetes y material de enriquecimiento</strong> adecuados para perros y gatos.</li>
            </ul>
            <span className="page-text">
              Las necesidades pueden variar según el momento y el número de animales acogidos.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Condiciones de las donaciones</h2>
            <span className="page-text">
              Para garantizar el bienestar y la seguridad de los animales:
            </span>
            <ul className="page-list">
              <li>El material debe estar en buen estado.</li>
              <li>No aceptamos productos caducados.</li>
              <li>Confirmamos previamente qué necesitamos en cada momento.</li>
            </ul>
            <span className="page-text">
              Esto nos permite gestionar el espacio y los recursos con criterio.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">¿Cómo hacer una donación de material?</h2>
            <span className="page-text">
              Si quieres colaborar, ponte en contacto con nosotros antes de realizar la entrega.
            </span>
            <span className="page-text">
              Te indicaremos qué necesitamos en ese momento y cómo hacerlo llegar directamente al centro de acogida.
            </span>
            <span className="page-text">
              Valoramos las donaciones útiles, no acumulativas.
            </span>
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
