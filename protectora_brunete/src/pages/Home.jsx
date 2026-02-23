import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

export default function Home() {
  usePageTitle(null)
  const [featuredAnimals, setFeaturedAnimals] = useState([])
  const [loadingAnimals, setLoadingAnimals] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await supabase.from('animals').select('id, name, age, img_url, animal_type, gender').eq('animal_state', 'en adopcion')
        const shuffled = (data || []).sort(() => Math.random() - 0.5).slice(0, 4)
        setFeaturedAnimals(shuffled)
      } catch {
        setFeaturedAnimals([])
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
                <h3 className="pillar-heading">Bienestar animal</h3>
                <span className="pillar-text">
                  Atendemos animales domésticos perdidos, abandonados o heridos. Cada intervención se valora individualmente, con atención veterinaria completa y seguimiento profesional.
                </span>
                <Link to="/quiénes-somos" className="pillar-link">Nuestro proyecto</Link>
              </article>

              <article className="pillar-card">
                <span className="pillar-number">02</span>
                <h3 className="pillar-heading">Adopción responsable</h3>
                <span className="pillar-text">
                  No buscamos salidas rápidas. Evaluamos compatibilidad, realizamos entrevistas y supervisamos todo el proceso para garantizar el bienestar de las mascotas a largo plazo y la idoneidad de la familia.
                </span>
                <Link to="/en-adopción" className="pillar-link">Proceso de adopción</Link>
              </article>

              <article className="pillar-card">
                <span className="pillar-number">03</span>
                <h3 className="pillar-heading">Colaboración estructurada</h3>
                <span className="pillar-text">
                  Tenemos varias formas de colaboración en nuestros centros. Desde voluntariados hasta acogidas temporales y donaciones materiales. Cada forma de colaborar nos ayuda en el día a día del centro.
                </span>
                <Link to="/colabora/voluntariado" className="pillar-link">Formas de colaborar</Link>
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
                  <Link to={`/animales-en-adopción?animal=${animal.id}`} key={animal.id} className="featured-card">
                    <div className="featured-card-img-wrap">
                      {getFirstImage(animal) ? (
                        <img src={getFirstImage(animal)} alt={animal.name} className="featured-card-img" />
                      ) : (
                        <div className="featured-card-placeholder"><i className="bi bi-image"></i></div>
                      )}
                    </div>
                    <div className="featured-card-body">
                      <div className="featured-card-info">
                        <h3 className="featured-card-name">{animal.name}</h3>
                        <span className="featured-card-sep">·</span>
                        <span className="featured-card-age">{formatAge(animal.age)}</span>
                        {animal.gender && (
                          <span className="featured-card-gender">
                            {animal.gender.toLowerCase() === 'macho' ? (
                              <i className="bi bi-gender-male"></i>
                            ) : animal.gender.toLowerCase() === 'hembra' ? (
                              <i className="bi bi-gender-female"></i>
                            ) : null}
                          </span>
                        )}
                      </div>
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
              <Link to="/colabora/voluntariado" className="help-card">
                <i className="bi bi-people help-card-icon"></i>
                <h3 className="help-card-title">Hazte voluntario</h3>
                <span className="help-card-text">
                  Colabora directamente en el cuidado diario de nuestros animales: paséales, ayuda con su socialización y hazles compañía.
                </span>
              </Link>
              <Link to="/colabora/casa-de-acogida" className="help-card">
                <i className="bi bi-house-heart help-card-icon"></i>
                <h3 className="help-card-title">Sé casa de acogida</h3>
                <span className="help-card-text">
                  Dale refugio a uno de nuestros animales mientras encontramos una familia definitiva.
                </span>
              </Link>
              <Link to="/colabora/donaciones" className="help-card">
                <i className="bi bi-box-seam help-card-icon"></i>
                <h3 className="help-card-title">Dona recursos</h3>
                <span className="help-card-text">
                  Mantas, comida, abrigos, camas, material veterinario (vendas, collarines…) Cualquier ayuda es bienvenida.
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-contact-cta">
          <div className="section-content">
            <div className="contact-cta-inner">
              <div className="contact-cta-text">
                <h2 className="contact-cta-title">¿Tienes dudas o quieres colaborar con nosotros?</h2>
                <span className="contact-cta-description">
                  Escríbenos sin compromiso y te responderemos lo antes posible.
                </span>
              </div>
              <Link to="/contacto" className="contact-cta-btn">Contáctanos</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
