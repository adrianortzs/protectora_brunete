import './components.css'

function AnimalCard({ animal, onSelect, formatAge }) {
  const name = animal?.name || 'Animal'
  const images = Array.isArray(animal?.img_url) ? animal.img_url : animal?.img_url ? [animal.img_url] : []
  const firstImage = images.filter(Boolean)[0] || null
  const normalizedGender = animal?.gender ? String(animal.gender).trim().toLowerCase() : ''

  return (
    <article className="animal-card">
      <div className="animal-image-wrapper">
        {firstImage ? (
          <img src={firstImage} alt={name} className="animal-image" loading="lazy" decoding="async" />
        ) : (
          <div className="animal-image-placeholder">
            <i className="bi bi-image"></i>
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
          <button type="button" className="animal-card-btn" onClick={() => onSelect(animal)}>
            Conóceme
          </button>
        </div>
      </div>
    </article>
  )
}

export default AnimalCard
