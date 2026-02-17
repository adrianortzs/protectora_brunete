import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import donationsImg from '../assets/2.png'
import './pages.css'

function MaterialDonations() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Donaciones de recursos</h1>
            <span className="collab-hero-text">
              Mantas, camas, pienso, material veterinario… Toda ayuda aporta.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <span className="collab-text">
              En Arat Adopta no aceptamos donaciones económicas.
            </span>
            <span className="collab-text">
              Elegimos trabajar exclusivamente con donaciones de recursos porque nos permiten cubrir necesidades reales, concretas y verificables dentro del centro de acogida.
            </span>
            <span className="collab-text">
              Cada aportación tiene un destino claro y un impacto directo en el bienestar diario de los animales.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">
              <i className="bi bi-box-seam collab-section-icon"></i>
              ¿Por qué solo donaciones de recursos?
            </h2>
            <span className="collab-text">
              Gestionamos nuestro propio centro y priorizamos una estructura sencilla y transparente.
            </span>
            <span className="collab-text">
              Las donaciones de recursos nos permiten:
            </span>
            <ul className="collab-list collab-list--highlight">
              <li>Responder a necesidades específicas.</li>
              <li>Evitar acumulación de fondos sin destino inmediato.</li>
              <li>Mantener una gestión directa y centrada en el cuidado diario.</li>
            </ul>
            <span className="collab-text">
              No es una limitación. Es una decisión responsable.
            </span>
          </section>

          <section className="collab-card">
            <h2 className="collab-card-title">
              <i className="bi bi-card-checklist collab-card-icon"></i>
              ¿Qué necesitamos?
            </h2>
            <span className="collab-text">
              El material que utilizamos de forma habitual incluye:
            </span>
            <ul className="collab-list collab-list--highlight">
              <li><strong>Mantas y camas</strong> para su descanso.</li>
              <li><strong>Comida</strong> (pienso para perros y gatos).</li>
              <li><strong>Material veterinario básico</strong> como gasas o vendas.</li>
              <li><strong>Correas, arneses y transportines</strong> para paseos y traslados.</li>
              <li><strong>Toallas y sábanas</strong> en buen estado.</li>
              <li><strong>Juguetes y material de enriquecimiento</strong> adecuados para perros y gatos.</li>
            </ul>
            <span className="collab-text">
              Las necesidades pueden variar según el momento y el número de animales acogidos.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Condiciones de las donaciones</h2>
            <span className="collab-text">
              Para garantizar el bienestar y la seguridad de los animales:
            </span>
            <ul className="collab-list">
              <li>El material debe estar en buen estado.</li>
              <li>No aceptamos productos caducados.</li>
              <li>Confirmamos previamente qué necesitamos en cada momento.</li>
            </ul>
            <span className="collab-text">
              Esto nos permite gestionar el espacio y los recursos con criterio.
            </span>
            <div className="collab-section-img-wrap">
              <img src={donationsImg} alt="Donaciones de recursos" className="collab-section-img" />
            </div>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cómo hacer una donación de material?</h2>
            <span className="collab-text">
              Si quieres colaborar, ponte en contacto con nosotros antes de realizar la entrega.
            </span>
            <span className="collab-text">
              Te indicaremos qué necesitamos en ese momento y cómo hacerlo llegar directamente al centro de acogida.
            </span>
            <span className="collab-text">
              Valoramos las donaciones útiles, no acumulativas.
            </span>
            <div className="collab-cta-wrap">
              <Link to="/contacto?asunto=Donación de material&mensaje=Hola, me gustaría donar material para el centro de acogida. ¿Qué necesitáis actualmente? ¿Cómo puedo ayudaros? #contact-form" className="collab-cta">Quiero donar recursos</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MaterialDonations
