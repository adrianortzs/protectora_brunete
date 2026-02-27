import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const HOME_ADOPTION_SECTIONS = [
  {
    key: 'all',
    title: 'Animales en adopcion',
    description: 'Explora todos los animales disponibles y encuentra el compañero ideal para tu familia.',
    to: '/animales-en-adopción',
    ctaLabel: 'Ver animales'
  },
  {
    key: 'cats',
    title: 'Gatos en adopcion',
    description: 'Conoce a los gatos que esperan un hogar con adopcion responsable y seguimiento.',
    to: '/animales-en-adopción/gatos',
    ctaLabel: 'Ver gatos'
  },
  {
    key: 'dogs',
    title: 'Perros en adopcion',
    description: 'Descubre los perros que buscan familia y da el primer paso para adoptar.',
    to: '/animales-en-adopción/perros',
    ctaLabel: 'Ver perros'
  }
]

export default function Home() {
  usePageTitle(null)
  const [adoptionPreview, setAdoptionPreview] = useState({ all: null, dogs: null, cats: null })
  const [loadingPreview, setLoadingPreview] = useState(true)

  useEffect(() => {
    const fetchPreviewAnimals = async () => {
      try {
        const { data } = await supabase
          .from('animals')
          .select('id, name, img_url, animal_type, arrival_date')
          .eq('animal_state', 'en adopcion')
          .order('arrival_date', { ascending: false })

        const animals = data || []
        setAdoptionPreview({
          all: animals[0] || null,
          dogs: animals.find((animal) => String(animal.animal_type || '').toLowerCase() === 'perro') || null,
          cats: animals.find((animal) => String(animal.animal_type || '').toLowerCase() === 'gato') || null
        })
      } catch {
        setAdoptionPreview({ all: null, dogs: null, cats: null })
      } finally {
        setLoadingPreview(false)
      }
    }
    fetchPreviewAnimals()
  }, [])

  const getFirstImage = (animal) => {
    if (!animal) return null
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)[0] || null
  }

  return (
    <div>
      <Header />
      <Hero />
      <main className="home-main">
        <section className="section-featured">
          <div className="section-content">
            {loadingPreview ? (
              <div className="featured-loading">
                <span className="featured-loader"></span>
              </div>
            ) : (
              <div className="home-adoption-grid">
                {HOME_ADOPTION_SECTIONS.map((section) => {
                  const previewAnimal = adoptionPreview[section.key]
                  const previewImage = getFirstImage(previewAnimal)
                  return (
                    <article key={section.key} className="home-adoption-card">
                      <div className="home-adoption-image-wrap">
                        {previewImage ? (
                          <img
                            src={previewImage}
                            alt={previewAnimal?.name || section.title}
                            className="home-adoption-image"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="home-adoption-image-placeholder">
                            <i className="bi bi-image" aria-hidden="true"></i>
                          </div>
                        )}
                      </div>
                      <div className="home-adoption-body">
                        <h3 className="home-adoption-title">{section.title}</h3>
                        <p className="home-adoption-text">{section.description}</p>
                        <Link to={section.to} className="home-adoption-link">{section.ctaLabel}</Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
