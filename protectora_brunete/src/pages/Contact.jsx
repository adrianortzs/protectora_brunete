import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  usePageTitle('Contacto')
  const { hash, search } = useLocation()
  const params = new URLSearchParams(search)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: params.get('asunto') || '',
    mensaje: params.get('mensaje') || ''
  })
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 100)
    }
  }, [hash])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFeedback({ type: 'error', text: 'El servicio de correo no está configurado. Contacta directamente a gestion@aratadopta.com.' })
      return
    }
    setSending(true)
    setFeedback(null)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setFeedback({ type: 'success', text: 'Mensaje enviado correctamente. Te responderemos lo antes posible.' })
      setFormData({ nombre: '', correo: '', telefono: '', asunto: '', mensaje: '' })
    } catch {
      setFeedback({ type: 'error', text: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos a gestion@aratadopta.com.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Contacto</h1>
            <span className="page-hero-text">
              ¿Tienes alguna duda o quieres colaborar? Escríbenos y te responderemos lo antes posible.
            </span>
          </div>
        </section>

        <div className="page-container page-container--wide">
          <div className="contact-layout">
            <div className="contact-sidebar">
              <section className="contact-info-block">
                <h2 className="page-section-title">Información de contacto</h2>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Emails</h3>
                  <span className="contact-detail-value"><a href="mailto:aratadopciones@gmail.com">aratadopciones@gmail.com</a></span>
                  <span className="contact-detail-value"><a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a></span>
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Teléfonos</h3>
                  <span className="contact-detail-value">Torrelodones: <a href="tel:+34918159294">918 15 92 94</a></span>
                  <span className="contact-detail-value">Brunete: <a href="tel:+34918158673">918 15 86 73</a></span>
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Redes sociales</h3>
                  <div className="contact-social">
                    <a href="https://www.facebook.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="contact-social-link">
                      <i className="bi bi-facebook"></i>
                      <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social-link">
                      <i className="bi bi-instagram"></i>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="contact-locations-block">
                <h2 className="page-section-title">¿Dónde nos encontramos?</h2>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Torrelodones</h3>
                  <span className="contact-detail-value">Paseo Joaquín Ruiz Gimenez 30</span>
                  <span className="contact-detail-value">28250 Torrelodones, Madrid</span>
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Brunete</h3>
                  <span className="contact-detail-value">Carretera M513 km 14.900</span>
                  <span className="contact-detail-value">28690 Brunete, Madrid</span>
                </div>
              </section>
            </div>

            <section className="contact-form-block" id="contact-form">
              <h2 className="page-section-title">Envíanos un mensaje</h2>
              {feedback && (
                <div className={`contact-feedback contact-feedback--${feedback.type}`} role="alert">
                  <i className={`bi ${feedback.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'}`}></i>
                  <span>{feedback.text}</span>
                </div>
              )}
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="nombre">Nombre *</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Tu nombre completo" disabled={sending} />
                </div>

                <div className="contact-field">
                  <label htmlFor="correo">Correo electrónico *</label>
                  <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required placeholder="tu@email.com" disabled={sending} />
                </div>

                <div className="contact-field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="600 000 000" disabled={sending} />
                </div>

                <div className="contact-field">
                  <label htmlFor="asunto">Asunto *</label>
                  <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required placeholder="¿Sobre qué quieres contactarnos?" disabled={sending} />
                </div>

                <div className="contact-field">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="6" placeholder="Escribe tu mensaje aquí..." disabled={sending} />
                </div>

                <button type="submit" className="page-cta contact-submit" disabled={sending}>
                  {sending ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
