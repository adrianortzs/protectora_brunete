import './components.css'

function AnimalCard({ animal, onSelect, formatAge }) {
  const getFirstImage = () => {
    if (!animal) return null
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)[0] || null
  }

  return (
    <article className="animal-card">
      <div className="animal-image-wrapper">
        {getFirstImage() ? (
          <img src={getFirstImage()} alt={animal.name} className="animal-image" />
        ) : (
          <div className="animal-image-placeholder">
            <i className="bi bi-image"></i>
          </div>
        )}
      </div>
      <div className="animal-content">
        <div className="animal-content-top">
          <h2 className="animal-name">{animal.name}</h2>
          {animal.gender && (
            <span className="animal-gender">
              {animal.gender.toLowerCase() === 'macho' ? (<i className="bi bi-gender-male"></i>) : animal.gender.toLowerCase() === 'hembra' ? (<i className="bi bi-gender-female"></i>) : (animal.gender)}
            </span>
          )}
        </div>
        <div className="animal-content-bottom">
          <span className="animal-age">
            Edad: {formatAge(animal.age)}
          </span>
          <span className="animal-size">
            Tamaño: {animal.size || '—'}
          </span>
        </div>
        {animal.animal_state === 'en adopcion' && (
          <span className="animal-state-badge">¡Disponible!</span>
        )}
        {animal.animal_state === 'adoptado' && (
          <span className="animal-state-badge">¡Adoptado!</span>
        )}
        <div className="animal-card-action">
          <button type="button" className="animal-card-btn" onClick={() => onSelect(animal)}>
            Conoce mi historia
          </button>
        </div>
      </div>
    </article>
  )
}

export default AnimalCard
