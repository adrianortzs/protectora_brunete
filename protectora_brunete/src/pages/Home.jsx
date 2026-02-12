import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './pages.css'

export default function Home() {
  const [featuredAnimals, setFeaturedAnimals] = useState([])
  const [loadingAnimals, setLoadingAnimals] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await supabase
          .from('animals')
          .select('id, name, age, img_url, animal_type, gender')
          .eq('animal_state', 'en adopcion')
          .limit(4)
        setFeaturedAnimals(data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingAnimals(false)
      }
    }
    fetchFeatured()
  }, [])

  const formatAge = (months) => {
    const m = parseInt(months)
    if (isNaN(m)) return '—'
    if (m < 12) return `${m} ${m === 1 ? 'mes' : 'meses'}`
    const y = Math.floor(m / 12)
    return `${y} ${y === 1 ? 'año' : 'años'}`
  }

  const getFirstImage = (animal) => {
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)[0] || null
  }

  return (
    <div>
      <Header />
      <Hero />
      <main className="home-main">

        <section className="section-pillars">
          <div className="section-content">
            <h2 className="section-title">Tres principios, un mismo criterio</h2>
            <div className="pillars-grid">
              <article className="pillar-card">
                <span className="pillar-number">01</span>
                <h3 className="pillar-heading">Protección real</h3>
                <span className="pillar-text">Atendemos animales domésticos perdidos, abandonados o heridos. Cada intervención se valora individualmente, con atención veterinaria completa y seguimiento profesional.</span>
                <Link to="/quiénes-somos" className="pillar-link">Conocer el proyecto</Link>
              </article>
              <article className="pillar-card">
                <span className="pillar-number">02</span>
                <h3 className="pillar-heading">Adopción con criterio</h3>
                <span className="pillar-text">No buscamos salidas rápidas. Evaluamos compatibilidad, realizamos entrevistas y acompañamos todo el proceso para garantizar bienestar a largo plazo.</span>
                <Link to="/adopción" className="pillar-link">Proceso de adopción</Link>
              </article>
              <article className="pillar-card">
                <span className="pillar-number">03</span>
                <h3 className="pillar-heading">Colaboración estructurada</h3>
                <span className="pillar-text">Voluntariado, acogida temporal y donaciones materiales. Cada forma de colaborar tiene criterios claros y un impacto directo en el día a día del centro.</span>
                <Link to="/colaboración/voluntariado" className="pillar-link">Formas de colaborar</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-featured">
          <div className="section-content">
            <div className="section-header-row">
              <h2 className="section-title">Esperando un hogar</h2>
              <Link to="/animales-en-adopción" className="section-header-link">Ver todos</Link>
            </div>
            {loadingAnimals ? (
              <div className="featured-loading">
                <span className="featured-loader"></span>
              </div>
            ) : featuredAnimals.length > 0 ? (
              <div className="featured-grid">
                {featuredAnimals.map((animal) => (
                  <Link to="/animales-en-adopción" key={animal.id} className="featured-card">
                    <div className="featured-card-img-wrap">
                      {getFirstImage(animal) ? (
                        <img src={getFirstImage(animal)} alt={animal.name} className="featured-card-img" />
                      ) : (
                        <div className="featured-card-placeholder"><i className="bi bi-image"></i></div>
                      )}
                    </div>
                    <div className="featured-card-body">
                      <h3 className="featured-card-name">{animal.name}</h3>
                      <span className="featured-card-meta">
                        {animal.animal_type === 'perro' ? 'Perro' : animal.animal_type === 'gato' ? 'Gato' : animal.animal_type} · {formatAge(animal.age)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <span className="featured-empty">Estamos actualizando las fichas. Pronto habrá animales disponibles.</span>
            )}
          </div>
        </section>

        <section className="section-help">
          <div className="section-content">
            <h2 className="section-title">¿Cómo puedes ayudar?</h2>
            <div className="help-grid">
              <Link to="/colaboración/voluntariado" className="help-card">
                <i className="bi bi-people help-card-icon"></i>
                <h3 className="help-card-title">Voluntariado</h3>
                <span className="help-card-text">Colaboración directa en el cuidado diario: paseos, socialización y acompañamiento.</span>
              </Link>
              <Link to="/colaboración/casa-de-acogida" className="help-card">
                <i className="bi bi-house-heart help-card-icon"></i>
                <h3 className="help-card-title">Casa de acogida</h3>
                <span className="help-card-text">Tu hogar como transición segura mientras encontramos una familia definitiva.</span>
              </Link>
              <Link to="/colaboración/donaciones" className="help-card">
                <i className="bi bi-box-seam help-card-icon"></i>
                <h3 className="help-card-title">Donaciones materiales</h3>
                <span className="help-card-text">Mantas, comida, material veterinario. No aceptamos dinero, solo lo que se usa a diario.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-contact-cta">
          <div className="section-content">
            <div className="contact-cta-inner">
              <div className="contact-cta-text">
                <h2 className="contact-cta-title">¿Tienes dudas o quieres colaborar?</h2>
                <span className="contact-cta-description">Escríbenos y te responderemos lo antes posible. Sin compromisos, con claridad.</span>
              </div>
              <Link to="/contacto" className="contact-cta-btn">Contactar</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
