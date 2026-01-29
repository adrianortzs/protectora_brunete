import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AnimalsInAdoption.css'

const ANIMAL_TYPE_FILTER = { perros: 'perro', gatos: 'gato' }
const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }

function AnimalsInAdoption() {
  const { animalType } = useParams()
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ animal_type: '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none })
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => { setCarouselIndex(0) }, [selectedAnimal?.id])

  const getAnimalImages = (animal) => {
    if (!animal) return []
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)
  }

  const filterValue = animalType ? ANIMAL_TYPE_FILTER[animalType] : null
  const title = filterValue === 'perro' ? 'Todos los perros en adopción' : filterValue === 'gato' ? 'Todos los gatos en adopción' : 'Todos los animales en adopción'
  const subtitle = filterValue === 'perro' ? 'Estos son todos los perros que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.' : filterValue === 'gato' ? 'Estos son todos los gatos que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.' : 'Estos son todos los animales que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.'

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        let query = supabase.from('animals').select('*')
        if (filterValue) query = query.eq('animal_type', filterValue)
        const { data, error: supabaseError } = await query
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
  }, [filterValue])

  useEffect(() => { if (filterValue) setFilters(prev => ({ ...prev, animal_type: filterValue })) }, [filterValue])

  const updateFilter = (key, value) => { setFilters(prev => ({ ...prev, [key]: value })) }
  const normalized = (v) => (v && String(v).trim().toLowerCase()) || ''
  const filteredAnimals = animals.filter((a) => {
    const typeOk = !filters.animal_type || normalized(a.animal_type) === normalized(filters.animal_type)
    const genderOk = !filters.gender || normalized(a.gender) === normalized(filters.gender)
    const ageOk = !filters.age || normalized(a.age) === normalized(filters.age)
    const sizeOk = !filters.size || normalized(a.size) === normalized(filters.size)
    return typeOk && genderOk && ageOk && sizeOk
  })
  const sortedAnimals = [...filteredAnimals].sort((a, b) => {
    if (filters.arrival_date === SORT_ARRIVAL.newest) return (new Date(b.arrival_date || 0) - new Date(a.arrival_date || 0))
    if (filters.arrival_date === SORT_ARRIVAL.oldest) return (new Date(a.arrival_date || 0) - new Date(b.arrival_date || 0))
    return 0
  })
  const unique = (arr, key) => [...new Set((arr || []).map((a) => a && a[key]).filter(Boolean))].sort()
  const capitalize = (str) => (str && str.length) ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : ''
  const ageOptions = unique(animals, 'age')
  const sizeOptions = unique(animals, 'size')

  return (
    <div>
      <Header />
      <main className="animals-page">
        <div className="animals-container">
          <header className="animals-header">
            <h1 className="animals-title">{title}</h1>
            <span className="animals-subtitle">{subtitle}</span>
          </header>
          {loading && (<div className="animals-status"><span className="loader"></span></div>)}
          {!loading && error && (<div className="animals-status animals-status-error"><p>{error}</p></div>)}
          {!loading && !error && animals.length > 0 && (
            <div className="animals-filters">
              <label className={`animals-filter-label ${filterValue ? 'animals-filter-label-locked' : ''}`}>Tipo de animal
                <select className="animals-filter-select" value={filterValue || filters.animal_type} onChange={(e) => updateFilter('animal_type', e.target.value)} disabled={!!filterValue} aria-readonly={!!filterValue}>
                  <option value="">Todos</option>
                  <option value="perro">Perros</option>
                  <option value="gato">Gatos</option>
                </select>
              </label>
              <label className="animals-filter-label">Sexo
                <select className="animals-filter-select" value={filters.gender} onChange={(e) => updateFilter('gender', e.target.value)}>
                  <option value="">Cualquiera</option>
                  <option value="macho">Macho</option>
                  <option value="hembra">Hembra</option>
                </select>
              </label>
              <label className="animals-filter-label">Edad
                <select className="animals-filter-select" value={filters.age} onChange={(e) => updateFilter('age', e.target.value)}>
                  <option value="">Cualquiera</option>
                  {ageOptions.map((age) => (<option key={age} value={age}>{age}</option>))}
                </select>
              </label>
              <label className="animals-filter-label">Tamaño
                <select className="animals-filter-select" value={filters.size} onChange={(e) => updateFilter('size', e.target.value)}>
                  <option value="">Cualquiera</option>
                  {sizeOptions.map((size) => (<option key={size} value={size}>{capitalize(size)}</option>))}
                </select>
              </label>
              <label className="animals-filter-label">Fecha de llegada
                <select className="animals-filter-select" value={filters.arrival_date} onChange={(e) => updateFilter('arrival_date', e.target.value)}>
                  <option value="">Sin orden</option>
                  <option value={SORT_ARRIVAL.oldest}>Más antiguos primero</option>
                  <option value={SORT_ARRIVAL.newest}>Más recientes primero</option>
                </select>
              </label>
              <button type="button" className="animals-filter-reset" onClick={() => setFilters({ animal_type: filterValue || '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none })}>Limpiar filtros</button>
            </div>
          )}
          {!loading && !error && animals.length === 0 && (
            <div className="animals-status">
              <p>{filterValue === 'perro' ? 'Ahora mismo no hay perros disponibles en adopción. Estamos actualizando las fichas.' : filterValue === 'gato' ? 'Ahora mismo no hay gatos disponibles en adopción. Estamos actualizando las fichas.' : 'Ahora mismo no hay animales disponibles en adopción. Estamos actualizando las fichas.'}</p>
            </div>
          )}
          {!loading && !error && animals.length > 0 && sortedAnimals.length === 0 && (
            <div className="animals-status">
              <p>No hay resultados con los filtros seleccionados. Prueba a cambiar o limpiar los filtros.</p>
            </div>
          )}
          {!loading && !error && animals.length > 0 && sortedAnimals.length > 0 && (
            <section className="animals-grid">
              {sortedAnimals.map((animal) => {
                return (
                  <article key={animal.id} className="animal-card">
                    <div className="animal-image-wrapper">
                        <img src={getAnimalImages(animal)[0]} alt={animal.name} className="animal-image" />
                    </div>
                    <div className="animal-content">
                        <div className='animal-content-top'>
                            <h2 className="animal-name">{animal.name}</h2>
                            {animal.gender && (
                              <span className='animal-gender'>
                                {animal.gender.toLowerCase() === 'macho' ? (
                                  <i className="bi bi-gender-male"></i>
                                ) : animal.gender.toLowerCase() === 'hembra' ? (
                                  <i className="bi bi-gender-female"></i>
                                ) : (
                                  animal.gender
                                )}
                              </span>
                            )}
                        </div>
                        <div className='animal-content-bottom'>
                            <span className='animal-age'>Edad: {animal.age}</span>
                            <span className='animal-size'>Tamaño: {animal.size}</span>
                        </div>
                        <div className='more-info-button'>
                            <button type="button" className='more-info-button-text' onClick={() => setSelectedAnimal(animal)}>Conóceme</button>
                        </div>
                    </div>
                  </article>
                )
              })}
            </section>
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
                  <dd>{selectedAnimal.age || '—'}</dd>
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
                  <h3>Descripción</h3>
                  <p>{selectedAnimal.description}</p>
                </div>
              )}
              <Link to="/contacto" className="animal-modal-cta" onClick={() => setSelectedAnimal(null)}>Solicitar adopción</Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default AnimalsInAdoption
