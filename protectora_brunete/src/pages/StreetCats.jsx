import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

function StreetCats() {
  usePageTitle('Gatos callejeros')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Gatos callejeros</h1>
            <span className="page-hero-text">
              Conoce la realidad de los gatos que viven en nuestras calles y cómo podemos ayudarles.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-question-circle page-section-icon"></i>
              ¿Qué es un gato callejero?
            </h2>
            <span className="page-text">
              Un gato feral, asilvestrado o callejero es un felino doméstico que vive en la calle, y que tiene miedo a los humanos por no haber tenido la oportunidad de socializarse a tiempo. Los gatos callejeros o felinos comunitarios viven solos o en colonias, y muchos toleran la presencia humana, ya que su supervivencia depende de que podamos ofrecerles el alimento y refugio que necesitan.
            </span>
            <span className="page-text">
              "Un gato callejero puede ser un felino enfermo, sucio, con salud lamentable y obligado a comer de la basura, pero un gato callejero también puede ser un felino con salud, alimentado de forma controlada, con cuidados veterinarios y feliz. El cambio sólo depende de nosotros", advirtió el británico Harry Eckman, Premio Internacional de Bienestar Felino, algo así como el premio Nobel de los gatos, y cocreador de Change for Animal Foundation. Eckman ha puesto en marcha programas de esterilización de gatos callejeros en Europa, América y Asia, y técnicamente se define como "un humano adoptado por el gato Inox", con quien comparte su vida en Portugal.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default StreetCats
