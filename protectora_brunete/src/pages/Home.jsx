import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="home-main">
        <section className="section-what-we-do">
          <div className="section-content">
            <div className="left-content">
              <h2 className="section-title">¿Qué hacemos?</h2>
              <span className="section-paragraph">Gestionamos dos centros de acogida propios y damos en adopción animales domésticos bajo criterios de bienestar, tiempo y recursos reales.</span>
              <span className="section-paragraph">Cada entrada y cada adopción es una decisión consciente. No acumulamos animales, trabajamos con responsabilidad.</span>
            </div>

            <div className="right-content">
              <span className="highlight-text">No somos un recurso de emergencia automática.</span>
              <span className="highlight-description">A diferencia de los centros municipales, nadie puede derivarnos animales sin nuestro consentimiento. Decidir cuándo acoger también es proteger.</span>
            </div>
          </div>
        </section>

        <section className="section-adoption">
          <div className="section-content">
            <h2 className="section-title">Adopción responsable</h2>
            <div className="adoption-grid">
              <div className="adoption-item">
                <h3 className="adoption-item-title">1. Proceso claro</h3>
                <span className="adoption-item-text">Evaluamos cada adopción para asegurar compatibilidad real entre animal y familia.</span>
              </div>
              <div className="adoption-item">
                <h3 className="adoption-item-title">2. Sin prisas</h3>
                <span className="adoption-item-text">No entregamos animales por impulso ni por presión externa.</span>
              </div>
              <div className="adoption-item">
                <h3 className="adoption-item-title">3. Seguimiento</h3>
                <span className="adoption-item-text">La adopción no termina el día que el animal sale del centro.</span>
              </div>
            </div>
            <div className="section-cta">
              <Link to="/animales-en-adopcion" className="cta-primary">Ver animales en adopción</Link>
            </div>
          </div>
        </section>

        <section className="section-collaborate">
          <div className="section-content">
            <h2 className="section-title">Colabora</h2>
            <span className="section-paragraph">No aceptamos donaciones económicas. Preferimos recibir materiales que usamos a diario y que impactan directamente en el bienestar de los animales.</span>
            <ul className="collaborate-list">
              <li>Mantas y camas</li>
              <li>Comida y material veterinario</li>
              <li>Correas, arneses y transportines</li>
            </ul>
            <div className="section-cta">
              <a href="/colabora" className="cta-secondary always-visible">Ver cómo colaborar</a>
            </div>
          </div>
        </section>
      </main>
      < Footer />
    </div>
  )
}
