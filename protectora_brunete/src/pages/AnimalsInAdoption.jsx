import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../lib/supabase'
import './AnimalsInAdoption.css'

function AnimalsInAdoption() {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('animals')
          .select('*')

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

  return (
    <div>
      <Header />
      <main className="animals-page">
        <div className="animals-container">
          <header className="animals-header">
            <h1 className="animals-title">Animales en adopción</h1>
            <p className="animals-subtitle">
              Estos son algunos de los animales que actualmente están buscando un hogar.
              Cada ficha se actualiza desde nuestro sistema en tiempo real.
            </p>
          </header>

          {loading && (
            <div className="animals-status">
              <p>Cargando animales en adopción...</p>
            </div>
          )}

          {!loading && error && (
            <div className="animals-status animals-status-error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && animals.length === 0 && (
            <div className="animals-status">
              <p>Ahora mismo no hay animales disponibles en adopción. Estamos actualizando las fichas.</p>
            </div>
          )}

          {!loading && !error && animals.length > 0 && (
            <section className="animals-grid">
              {animals.map((animal) => {
                const imageUrl = animal.image_url || animal.photo || animal.image || null
                return (
                  <article key={animal.id} className="animal-card">
                    {imageUrl && (
                      <div className="animal-image-wrapper">
                        <img src={imageUrl} alt={animal.name || 'Animal en adopción'} className="animal-image" />
                      </div>
                    )}
                    <div className="animal-content">
                      <h2 className="animal-name">{animal.name || 'Animal en adopción'}</h2>
                      {(animal.species || animal.type || animal.breed) && (
                        <p className="animal-meta">
                          {animal.species || animal.type}
                          {animal.breed ? ` · ${animal.breed}` : ''}
                        </p>
                      )}
                      {(animal.age || animal.size) && (
                        <p className="animal-meta">
                          {animal.age && <span>{animal.age}</span>}
                          {animal.age && animal.size && <span> · </span>}
                          {animal.size && <span>{animal.size}</span>}
                        </p>
                      )}
                      {animal.description && (
                        <p className="animal-description">
                          {animal.description}
                        </p>
                      )}
                      {animal.location && (
                        <p className="animal-location">
                          Centro: <span>{animal.location}</span>
                        </p>
                      )}
                    </div>
                  </article>
                )
              })}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AnimalsInAdoption

