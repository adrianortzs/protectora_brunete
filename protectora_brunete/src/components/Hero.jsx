import './components.css'
import { useCookieConsent } from '../context/useCookieConsent'
import FadeInImage from './FadeInImage'

const YOUTUBE_VIDEO_ID = 'B2RyNY6O6yc'
const YOUTUBE_EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&controls=1`
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

function Hero() {
  const { optionalCookiesAllowed } = useCookieConsent()
  const showEmbed = optionalCookiesAllowed

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">"La adopción es voluntaria, responsable y de por vida"</h1>
          <span className="hero-description">
            Somos una protectora independiente con centros de acogida propios. Llevamos desde 2017 luchando por los animales y buscamos familias responsables que quieran darles una segunda oportunidad.
          </span>
          <span className="hero-microcopy">
            Nuestro compromiso: encontrar el hogar ideal para cada mascota.<br />¿Nos ayudas a cambiar una vida hoy?
          </span>
        </div>
        <div className="hero-video">
          {showEmbed ? (
            <iframe
              src={YOUTUBE_EMBED_SRC}
              title="Arat Adopta — vídeo de presentación"
              allowFullScreen
              className="hero-iframe"
            />
          ) : (
            <div className="hero-video-blocked" aria-label="Vídeo de YouTube no cargado hasta aceptar cookies opcionales">
              <FadeInImage
                src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                alt=""
                className="hero-video-poster"
                width="480"
                height="360"
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero-video-blocked-overlay">
                <p className="hero-video-blocked-text">
                  El vídeo se sirve desde YouTube. Para verlo aquí, acepta las cookies opcionales en el aviso de la parte
                  inferior o{' '}
                  <a href={YOUTUBE_WATCH_URL} target="_blank" rel="noopener noreferrer" className="hero-video-blocked-link">
                    ábrelo en YouTube
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
