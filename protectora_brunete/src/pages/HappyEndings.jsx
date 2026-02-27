import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { paginate } from '../utils/pagination'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const PAGE_TITLE = 'Finales felices'
const PAGE_SUBTITLE = 'Estos son algunos de los animales que han encontrado un hogar gracias a personas como tú. Cada adopción es una historia de amor y esperanza. ¡Gracias por formar parte de estos finales felices!'
const EMPTY_STATE_TEXT = 'Finales felices (próximamente)'
const LOAD_ERROR_TEXT = 'Ha ocurrido un error al cargar los animales. Inténtalo de nuevo en unos minutos.'
const FALLBACK_CARD_TEXT = '¡Encontró su hogar!'

function getImageList(animal) {
  if (!animal) return []
  const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
  return list.filter(Boolean)
}

function formatDate(dateStr) {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function getHappyEndingText(animal) {
  const adoptionDate = formatDate(animal?.adoption_date)
  if (adoptionDate) return `Encontró su hogar el ${adoptionDate}`
  return FALLBACK_CARD_TEXT
}

function capitalizeFirstLetter(value) {
  if (typeof value !== 'string') return ''
  const trimmedValue = value.trim()
  if (!trimmedValue) return ''
  return `${trimmedValue.charAt(0).toUpperCase()}${trimmedValue.slice(1)}`
}

function HappyEndings() {
  usePageTitle(PAGE_TITLE)
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data, error: supabaseError } = await supabase.from('animals').select('*').eq('animal_state', 'adoptado').order('adoption_date', { ascending: false })
        if (supabaseError) throw supabaseError
        setAnimals(data || [])
      } catch (err) {
        setError(LOAD_ERROR_TEXT)
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
      <main className="animals-page page--happy-endings">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{PAGE_TITLE}</h1>
            <p className="page-hero-text">{PAGE_SUBTITLE}</p>
          </div>
        </section>
        <div className="animals-container">
          {loading && (
            <div className="animals-status animals-status--loading" role="status" aria-live="polite">
              <span className="loader" aria-hidden="true"></span>
              <p className="animals-status-loading-text">Cargando animales...</p>
            </div>
          )}
          {!loading && error && (<div className="animals-status animals-status-error"><p>{error}</p></div>)}
          {!loading && !error && animals.length === 0 && (
            <div className="animals-status">
              <p>{EMPTY_STATE_TEXT}</p>
            </div>
          )}
          {!loading && !error && animals.length > 0 && (
            <>
              <section className="happy-grid">
                {paginatedAnimals.map((animal) => {
                  const firstImage = getImageList(animal)[0]
                  const displayName = capitalizeFirstLetter(animal?.name)
                  return (
                    <article key={animal.id} className="happy-card">
                      <div className="happy-card-img-wrapper">
                        {firstImage ? (
                          <img src={firstImage} alt={displayName || 'Animal adoptado'} className="happy-card-img" loading="lazy" decoding="async" />
                        ) : (
                          <div className="happy-card-placeholder">
                            <i className="bi bi-image" aria-hidden="true"></i>
                          </div>
                        )}
                      </div>
                      <div className="happy-card-body">
                        <h2 className="happy-card-name">{displayName}</h2>
                        <p className="happy-card-dates">
                          <span>{getHappyEndingText(animal)}</span>
                        </p>
                      </div>
                    </article>
                  )
                })}
              </section>
              <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HappyEndings
