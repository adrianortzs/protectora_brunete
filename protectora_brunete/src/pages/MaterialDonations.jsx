import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function MaterialDonations() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Donaciones materiales</h1>
            <span className="collab-hero-text">
              No aceptamos donaciones económicas. Apostamos por donaciones materiales que utilizamos a diario y que tienen un impacto directo en el bienestar de los animales acogidos.
            </span>
            <span className="collab-hero-text">
              Cualquier aportación de los siguientes materiales nos ayuda a seguir cuidándolos en el centro de acogida.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-card">
            <h2 className="collab-card-title">¿Qué necesitamos?</h2>
            <ul className="collab-list collab-list--highlight">
              <li><strong>Mantas y camas</strong> para su descanso.</li>
              <li><strong>Comida</strong> (pienso para perros y gatos) y <strong>material veterinario</strong> como gasas o vendas.</li>
              <li><strong>Correas, arneses y transportines</strong> para paseos y traslados.</li>
              <li><strong>Toallas y sábanas</strong> en buen estado.</li>
              <li><strong>Juguetes y material de enriquecimiento</strong> adecuados para perros y gatos.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cómo hacer una donación de material?</h2>
            <span className="collab-text">
              Si quieres colaborar con una donación de material, ponte en contacto con nosotros. Te indicaremos qué necesitamos en cada momento y cómo puedes entregarlo para que llegue directamente al centro de acogida.
            </span>
            <div className="collab-cta-wrap">
              <Link to="/contacto#contact-form" className="collab-cta">Contactar para donar material</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MaterialDonations
