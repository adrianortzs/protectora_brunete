import './components.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">"La adopción es voluntaria, responsable y de por vida"</h1>
          <span className="hero-description">Somos una protectora independiente con centros de acogida propios. Tomamos decisiones responsables por el bienestar animal.</span>
          <span className="hero-microcopy">No somos un centro municipal. Colaboramos, pero actuamos con autonomía.</span>
        </div>
        <div className="hero-video">
          <iframe src="https://www.youtube-nocookie.com/embed/B2RyNY6O6yc?rel=0&modestbranding=1&controls=1" title="Arat Adopta" allowFullScreen className="hero-iframe"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Hero
