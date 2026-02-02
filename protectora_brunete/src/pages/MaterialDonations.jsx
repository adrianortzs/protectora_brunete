import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MaterialDonations.css'

function MaterialDonations() {
  return (
    <div>
      <Header />
      <main className="donations-page">
        <div className="donations-container">
          <section className="don-intro">
            <h1 className="don-page-title">Donaciones materiales</h1>
            <span className="don-text">No aceptamos donaciones económicas. Preferimos recibir materiales que usamos a diario y que impactan directamente en el bienestar de los animales acogidos.</span>
            <span className="don-text">Cualquier aportación de los siguientes materiales nos ayuda a seguir cuidando y protegiendo a los animales.</span>
          </section>

          <section className="don-section">
            <h2 className="don-section-title">¿Qué necesitamos?</h2>
            <ul className="don-list">
              <li><strong>Mantas y camas</strong> para que los animales descansen cómodos.</li>
              <li><strong>Comida</strong> (pienso para perros y gatos) y <strong>material veterinario</strong> (gasas, vendas, etc.).</li>
              <li><strong>Correas, arneses y transportines</strong> para paseos y desplazamientos.</li>
              <li><strong>Toallas y sábanas</strong> en buen estado.</li>
              <li><strong>Juguetes y enriquecimiento</strong> adecuados para perros y gatos.</li>
            </ul>
          </section>

          <section className="don-section">
            <h2 className="don-section-title">¿Cómo hacer una donación de material?</h2>
            <div className="don-block">
              <span className="don-text">Si quieres hacer una donación de material, contacta con nosotros por correo o teléfono. Te indicaremos qué necesitamos en cada momento y cómo y dónde puedes entregarlo para que llegue directamente al centro de acogida.</span>
              <div className="don-cta-wrap">
                <Link to="/contacto" className="don-cta">Contactar para donar material</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MaterialDonations
