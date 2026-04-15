import './components.css'
import { useState } from 'react'
import FadeInImage from './FadeInImage'

function AnimalCard({ animal, onSelect, formatAge }) {
  const name = animal?.name || 'Animal'
  const images = Array.isArray(animal?.img_url) ? animal.img_url : animal?.img_url ? [animal.img_url] : []
  const firstImage = images.filter(Boolean)[0] || null
  const normalizedGender = animal?.gender ? String(animal.gender).trim().toLowerCase() : ''
  const [imageFailed, setImageFailed] = useState(false)

  const handleOpen = () => onSelect(animal)

  const handleCardKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  return (
    <article
      className="animal-card"
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleCardKeyDown}
      aria-label={`Ver detalle de ${name}`}
    >
      <div className="animal-image-wrapper">
        {firstImage && !imageFailed ? (
          <FadeInImage
            src={firstImage}
            alt={name}
            className="animal-image"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="animal-image-placeholder">
            <i className="bi bi-image"></i>
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="animal-content">
        <div className="animal-content-top">
          <h2 className="animal-name">{name}</h2>
          {animal?.gender && (
            <span className="animal-gender">
              {normalizedGender === 'macho'
                ? <i className="bi bi-gender-male" aria-hidden="true"></i>
                : normalizedGender === 'hembra'
                  ? <i className="bi bi-gender-female" aria-hidden="true"></i>
                  : animal.gender}
            </span>
          )}
        </div>
        <div className="animal-content-bottom">
          <span className="animal-age">
            Edad: {formatAge(animal?.age)}
          </span>
          <span className="animal-size">
            Tamaño: {animal?.size || '—'}
          </span>
        </div>
        <div className="animal-card-action">
          <button
            type="button"
            className="animal-card-btn"
            onClick={(event) => {
              event.stopPropagation()
              handleOpen()
            }}
          >
            Conóceme
          </button>
        </div>
      </div>
    </article>
  )
}

export default AnimalCard
