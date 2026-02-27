import { supabase } from '../lib/supabase'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimalFilter from '../components/AnimalFilter'
import AnimalCard from '../components/AnimalCard'
import { Pagination } from '../components/Pagination'
import { paginate } from '../utils/pagination'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const ANIMAL_TYPE_FILTER = { perros: 'perro', gatos: 'gato' }
const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }
const FELINE_ARTICLES = [{ to: '/gestión-felina/ces', label: 'CES' }, { to: '/gestión-felina/castración', label: 'Castración en gatos' }, { to: '/gestión-felina/gatos-callejeros', label: 'Gatos callejeros' }]
const CANINE_ARTICLES = [{ to: '/10-peticiones-de-un-perro', label: '10 peticiones de un perro' }]

function AnimalsInAdoption() {
  const { animalType } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ animal_type: '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none })
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => { setCarouselIndex(0) }, [selectedAnimal?.id])

  const handleCloseModal = useCallback(() => {
    setSelectedAnimal(null)
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('animal')
    setSearchParams(newSearchParams, { replace: true })
  }, [searchParams, setSearchParams])

  useEffect(() => {
    if (selectedAnimal) {
      document.body.style.overflow = 'hidden'
      const onKey = (e) => { if (e.key === 'Escape') handleCloseModal() }
      document.addEventListener('keydown', onKey)
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedAnimal, handleCloseModal])

  const animalIdFromUrl = searchParams.get('animal')
  useEffect(() => {
    if (animalIdFromUrl && animals.length > 0) {
      const animal = animals.find(a => a.id.toString() === animalIdFromUrl.toString())
      if (animal) {
        setSelectedAnimal(animal)
      }
    }
  }, [animalIdFromUrl, animals])

  const getAnimalImages = (animal) => {
    if (!animal) return []
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)
  }
  const selectedAnimalImages = useMemo(() => getAnimalImages(selectedAnimal), [selectedAnimal])

  const filterValue = animalType ? ANIMAL_TYPE_FILTER[animalType] : null
  usePageTitle(filterValue === 'perro' ? 'Perros en adopción' : filterValue === 'gato' ? 'Gatos en adopción' : 'Animales en adopción')
  const title = filterValue === 'perro' ? 'Todos los perros en adopción' : filterValue === 'gato' ? 'Todos los gatos en adopción' : 'Todos los animales en adopción'
  const subtitle = filterValue === 'perro' ? 'Estos son todos los perros que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.' : filterValue === 'gato' ? 'Estos son todos los gatos que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.' : 'Estos son todos los animales que actualmente se encuentran en uno de nuestros centros de acogida y están buscando un hogar. Cada ficha se actualiza desde nuestro sistema en tiempo real para garantizar la información más actualizada.'

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        let query = supabase.from('animals').select('*').eq('animal_state', 'en adopcion')
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

  useEffect(() => {
    setFilters({ animal_type: filterValue || '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none })
    setCurrentPage(1)
  }, [filterValue])

  const updateFilter = (key, value) => { setFilters(prev => ({ ...prev, [key]: value })); setCurrentPage(1) }
  const normalized = (v) => (v && String(v).trim().toLowerCase()) || ''
  
  const getAgeCategory = (ageMonths) => {
    const m = parseInt(ageMonths)
    if (isNaN(m)) return ''
    if (m < 12) return 'cachorro'
    if (m < 24) return 'adulto'
    return 'senior'
  }

  const formatAge = (ageMonths) => {
    const m = parseInt(ageMonths)
    if (isNaN(m)) return '—'
    if (m < 12) return `${m} ${m === 1 ? 'mes' : 'meses'}`
    const years = Math.floor(m / 12)
    return `${years} ${years === 1 ? 'año' : 'años'}`
  }

  const filteredAnimals = animals.filter((a) => {
    const typeOk = !filters.animal_type || normalized(a.animal_type) === normalized(filters.animal_type)
    const genderOk = !filters.gender || normalized(a.gender) === normalized(filters.gender)
    const ageOk = !filters.age || getAgeCategory(a.age) === filters.age
    const sizeOk = !filters.size || normalized(a.size) === normalized(filters.size)
    return typeOk && genderOk && ageOk && sizeOk
  })
  const sortedAnimals = [...filteredAnimals].sort((a, b) => {
    if (filters.arrival_date === SORT_ARRIVAL.newest) return (new Date(b.arrival_date || 0) - new Date(a.arrival_date || 0))
    if (filters.arrival_date === SORT_ARRIVAL.oldest) return (new Date(a.arrival_date || 0) - new Date(b.arrival_date || 0))
    return 0
  })

  const { paginated: paginatedAnimals, totalPages, safePage } = paginate(sortedAnimals, currentPage)

  return (
    <div>
      <Header />
      <main className="animals-page page--animals-in-adoption">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{title}</h1>
            <p className="page-hero-text">{subtitle}</p>
          </div>
        </section>
        <div className="animals-container">
          {filterValue === 'perro' && (
            <section className="feline-banner" aria-label="Artículos de adopción canina">
              <p className="feline-banner-text">Antes de adoptar, lee esta guía esencial</p>
              <div className="feline-banner-links">
                {CANINE_ARTICLES.map((item) => (<Link key={item.to} to={item.to} className="feline-banner-link">{item.label}</Link>))}
              </div>
            </section>
          )}
          {filterValue === 'gato' && (
            <section className="feline-banner" aria-label="Artículos de gestión felina">
              <p className="feline-banner-text">¿Quieres profundizar en gestión felina?</p>
              <div className="feline-banner-links">
                {FELINE_ARTICLES.map((item) => (<Link key={item.to} to={item.to} className="feline-banner-link">{item.label}</Link>))}
              </div>
            </section>
          )}
          {loading && (
            <div className="animals-status animals-status--loading" role="status" aria-live="polite">
              <span className="loader" aria-hidden="true"></span>
              <p className="animals-status-loading-text">Cargando animales...</p>
            </div>
          )}
          {!loading && error && (<div className="animals-status animals-status-error"><p>{error}</p></div>)}
          {!loading && !error && animals.length > 0 && (
            <AnimalFilter filters={filters} onFilterChange={updateFilter} filterValue={filterValue} onClear={() => { setFilters({ animal_type: filterValue || '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none }); setCurrentPage(1) }} />
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
        <div className="animal-modal-backdrop" onClick={handleCloseModal}>
          <div className="animal-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="animal-modal-title">
            <button type="button" className="animal-modal-close" onClick={handleCloseModal} aria-label="Cerrar ficha">×</button>
            <div className="animal-modal-carousel">
              <div className="animal-modal-carousel-track" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                {selectedAnimalImages.length > 0 ? (
                  selectedAnimalImages.map((url, i) => (
                    <div key={i} className="animal-modal-carousel-slide">
                      <img src={url} alt={`${selectedAnimal.name} ${i + 1}`} className="animal-modal-carousel-image" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                    </div>
                  ))
                ) : (
                  <div className="animal-modal-carousel-slide animal-modal-carousel-placeholder">
                    <span>Sin imagen</span>
                  </div>
                )}
              </div>
              {selectedAnimalImages.length > 1 && (
                <>
                  <button type="button" className="animal-modal-carousel-prev" onClick={() => setCarouselIndex((i) => (i <= 0 ? selectedAnimalImages.length - 1 : i - 1))} aria-label="Anterior">‹</button>
                  <button type="button" className="animal-modal-carousel-next" onClick={() => setCarouselIndex((i) => (i >= selectedAnimalImages.length - 1 ? 0 : i + 1))} aria-label="Siguiente">›</button>
                  <div className="animal-modal-carousel-dots">
                    {selectedAnimalImages.map((_, i) => (
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
                  <h3>Descripción</h3>
                  <p>{selectedAnimal.description}</p>
                </div>
              )}
              <button type="button" className="animal-modal-cta" onClick={() => {
                const name = selectedAnimal.name || 'animal'
                const params = new URLSearchParams({
                  asunto: `Solicitud de adopción – ${name}`,
                  mensaje: `Hola, me gustaría solicitar información sobre la adopción de ${name}. He visto su ficha en la web y me gustaría conocerle en persona.`
                })
                handleCloseModal()
                navigate(`/contacto?${params.toString()}#contact-form`)
              }}>Solicitar adopción</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default AnimalsInAdoption
