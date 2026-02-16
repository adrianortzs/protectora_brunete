import './components.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">"La adopción es voluntaria, responsable y de por vida"</h1>
          <span className="hero-description">
            Somos una protectora independiente con centros de acogida propios. Llevamos desde 20XX luchando por los animales y buscamos familias responsables que quieran darles una segunda oportunidad.
          </span>
          <span className="hero-microcopy">
            Nuestro compromiso: encontrar el hogar ideal para cada mascota.<br />¿Nos ayudas a cambiar una vida hoy?
          </span>
        </div>
        <div className="hero-video">
          <iframe src="https://www.youtube-nocookie.com/embed/B2RyNY6O6yc?rel=0&modestbranding=1&controls=1" title="Arat Adopta" allowFullScreen className="hero-iframe"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Hero
