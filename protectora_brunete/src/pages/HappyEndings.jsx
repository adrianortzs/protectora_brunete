import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimalCard from '../components/AnimalCard'
import { Pagination, paginate } from '../components/Pagination'
import './pages.css'

function HappyEndings() {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => { setCarouselIndex(0) }, [selectedAnimal?.id])

  const getAnimalImages = (animal) => {
    if (!animal) return []
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)
  }

  const formatAge = (ageMonths) => {
    const m = parseInt(ageMonths)
    if (isNaN(m)) return '—'
    if (m < 12) return `${m} ${m === 1 ? 'mes' : 'meses'}`
    const years = Math.floor(m / 12)
    return `${years} ${years === 1 ? 'año' : 'años'}`
  }

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('animals')
          .select('*')
          .eq('animal_state', 'adoptado')
        if (supabaseError) throw supabaseError
        setAnimals(data || [])
      } catch (err) {
        setError('Ha ocurrido un error al cargar los animales. Inténtalo de nuevo en unos minutos.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAnimals()
  }, [])

  const { paginated: paginatedAnimals, totalPages, safePage } = paginate(animals, currentPage)

  return (
    <div>
      <Header />
      <main className="animals-page">
        <div className="animals-container">
          <header className="animals-header">
            <h1 className="animals-title">Finales felices</h1>
            <span className="animals-subtitle">
              Estos son algunos de los animales que han encontrado un hogar gracias a personas como tú. 
              Cada adopción es una historia de amor y esperanza. ¡Gracias por formar parte de estos finales felices!
            </span>
          </header>
          {loading && (<div className="animals-status"><span className="loader"></span></div>)}
          {!loading && error && (<div className="animals-status animals-status-error"><p>{error}</p></div>)}
          {!loading && !error && animals.length === 0 && (
            <div className="animals-status">
              <p>Finales felices (próximamente)</p>
            </div>
          )}
          {!loading && !error && animals.length > 0 && (
            <>
              <section className="animals-grid">
                {paginatedAnimals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} onSelect={setSelectedAnimal} formatAge={formatAge} />
                ))}
              </section>
              <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          )}
        </div>
      </main>
      {selectedAnimal && (
        <div className="animal-modal-backdrop" onClick={() => setSelectedAnimal(null)}>
          <div className="animal-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="animal-modal-title">
            <button type="button" className="animal-modal-close" onClick={() => setSelectedAnimal(null)} aria-label="Cerrar ficha">×</button>
            <div className="animal-modal-carousel">
              <div className="animal-modal-carousel-track" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                {getAnimalImages(selectedAnimal).length > 0 ? (
                  getAnimalImages(selectedAnimal).map((url, i) => (
                    <div key={i} className="animal-modal-carousel-slide">
                      <img src={url} alt={`${selectedAnimal.name} ${i + 1}`} className="animal-modal-carousel-image" />
                    </div>
                  ))
                ) : (
                  <div className="animal-modal-carousel-slide animal-modal-carousel-placeholder">
                    <span>Sin imagen</span>
                  </div>
                )}
              </div>
              {getAnimalImages(selectedAnimal).length > 1 && (
                <>
                  <button type="button" className="animal-modal-carousel-prev" onClick={() => setCarouselIndex((i) => (i <= 0 ? getAnimalImages(selectedAnimal).length - 1 : i - 1))} aria-label="Anterior">‹</button>
                  <button type="button" className="animal-modal-carousel-next" onClick={() => setCarouselIndex((i) => (i >= getAnimalImages(selectedAnimal).length - 1 ? 0 : i + 1))} aria-label="Siguiente">›</button>
                  <div className="animal-modal-carousel-dots">
                    {getAnimalImages(selectedAnimal).map((_, i) => (
                      <button key={i} type="button" className={`animal-modal-carousel-dot ${i === carouselIndex ? 'is-active' : ''}`} onClick={() => setCarouselIndex(i)} aria-label={`Ir a imagen ${i + 1}`} aria-current={i === carouselIndex ? 'true' : undefined} />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="animal-modal-content">
              <span className="animal-modal-adopted-badge">¡Adoptado!</span>
              <h2 id="animal-modal-title" className="animal-modal-name">{selectedAnimal.name}</h2>
              <dl className="animal-modal-details">
                <div className="animal-modal-detail">
                  <dt>Sexo</dt>
                  <dd>
                    {selectedAnimal.gender ? (
                      selectedAnimal.gender.toLowerCase() === 'macho' ? (
                        <><i className="bi bi-gender-male" aria-hidden></i> Macho</>
                      ) : selectedAnimal.gender.toLowerCase() === 'hembra' ? (
                        <><i className="bi bi-gender-female" aria-hidden></i> Hembra</>
                      ) : (
                        selectedAnimal.gender
                      )
                    ) : '—'}
                  </dd>
                </div>
                <div className="animal-modal-detail">
                  <dt>Edad</dt>
                  <dd>{formatAge(selectedAnimal.age)}</dd>
                </div>
                <div className="animal-modal-detail">
                  <dt>Tamaño</dt>
                  <dd>{selectedAnimal.size ? String(selectedAnimal.size).charAt(0).toUpperCase() + String(selectedAnimal.size).slice(1).toLowerCase() : '—'}</dd>
                </div>
                <div className="animal-modal-detail">
                  <dt>Fecha de llegada</dt>
                  <dd>{selectedAnimal.arrival_date ? new Date(selectedAnimal.arrival_date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '—'}</dd>
                </div>
              </dl>
              {selectedAnimal.description && (
                <div className="animal-modal-description">
                  <h3>Su historia</h3>
                  <p>{selectedAnimal.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default HappyEndings
