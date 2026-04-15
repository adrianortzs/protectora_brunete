import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeInImage from '../components/FadeInImage'
import usePageSEO from '../hooks/usePageSEO'
import './pages.css'

function CER() {
  usePageSEO({
    title: 'CER – Captura, esterilización y retorno',
    description: 'Programa CER (captura, esterilización y retorno): gestión ética de colonias felinas en Brunete y municipios colaboradores.',
  })
  return (
    <div>
      <Header />
      <main className="page page--cer">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">CER – Captura, Esterilización y Retorno</h1>
            <span className="page-hero-text">
              El método ético y eficaz para gestionar las colonias felinas urbanas.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-question-circle page-section-icon"></i>
              ¿Qué es el CER?
            </h2>
            <p className="page-text">
              En el ámbito de protección animal, el CER significa Captura – Esterilización – Retorno, también conocido internacionalmente como TNR (Trap–Neuter–Return).
            </p>
            <p className="page-text">
              Es una estrategia ética y científicamente respaldada para el control poblacional de gatos ferales o comunitarios (gatos sin dueño que viven en la vía pública).
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-diagram-3 page-section-icon"></i>
              ¿En qué consiste el método CER?
            </h2>
            <p className="page-text">El procedimiento incluye tres etapas:</p>
            <ul className="page-list">
              <li>
                <strong>Captura (C):</strong> los gatos son capturados de forma segura mediante trampas especiales que no les causan daño.
              </li>
              <li>
                <strong>Esterilización (E):</strong> son intervenidos quirúrgicamente por un veterinario para evitar su reproducción.
                En esta instancia también suelen vacunarse, desparasitarse y realizarse un pequeño corte en la oreja (marcado sanitario) para identificarlos como esterilizados.
              </li>
              <li>
                <strong>Retorno (R):</strong> una vez recuperados, los gatos son devueltos al mismo territorio donde fueron capturados.
              </li>
            </ul>
          </section>

          <div className="page-cer-method-photos">
            <figure className="page-editorial-photo-figure">
              <FadeInImage
                src="/gatos4.webp"
                alt="Gato comunitario en el entorno urbano, contexto del programa CER"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </figure>
            <figure className="page-editorial-photo-figure">
              <FadeInImage
                src="/gatos3.webp"
                alt="Gatos en colonia felina gestionada con captura, esterilización y retorno"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </figure>
          </div>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-bullseye page-section-icon"></i>
              Objetivos del CER
            </h2>
            <ul className="page-list">
              <li>Reducir progresivamente la población de gatos callejeros.</li>
              <li>Disminuir nacimientos no deseados.</li>
              <li>Reducir peleas, marcaje y maullidos asociados al celo.</li>
              <li>Mejorar el estado sanitario general de la colonia.</li>
              <li>Evitar métodos crueles o ineficaces como el sacrificio.</li>
            </ul>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-journal-check page-section-icon"></i>
              Fundamento técnico
            </h2>
            <p className="page-text">
              Diversas organizaciones internacionales como Humane Society of the United States y Alley Cat Allies respaldan el método CER como la estrategia más eficaz y humanitaria para el manejo de colonias felinas urbanas.
            </p>
            <p className="page-text">Está demostrado que:</p>
            <ul className="page-list">
              <li>
                La eliminación de gatos sin esterilización genera el llamado <strong>efecto vacío</strong>, donde nuevos animales ocupan el territorio.
              </li>
              <li>
                La esterilización masiva y sostenida reduce la población de forma estable a mediano y largo plazo.
              </li>
            </ul>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-check2-circle page-section-icon"></i>
              En resumen
            </h2>
            <p className="page-text">El CER es un programa de gestión poblacional basado en:</p>
            <ul className="page-list">
              <li>Evidencia científica.</li>
              <li>Bienestar animal.</li>
              <li>Salud pública.</li>
              <li>Control ético y sostenible.</li>
            </ul>
            <p className="page-text">
              Es actualmente el modelo recomendado en muchas ciudades para el manejo responsable de colonias felinas comunitarias.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CER
