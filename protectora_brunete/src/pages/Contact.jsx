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
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_ALLOWED_REGEX = /^[0-9+\s().-]+$/

const HERO_PARAGRAPHS = ['¿Tienes alguna duda o quieres colaborar? Escríbenos y te responderemos lo antes posible.']

const CONTACT_EMAILS = [{ label: 'aratadopciones@gmail.com', href: 'mailto:aratadopciones@gmail.com' }, { label: 'gestion@aratadopta.com', href: 'mailto:gestion@aratadopta.com' }]

const CONTACT_PHONES = [{ label: 'Torrelodones', number: '918 15 92 94', href: 'tel:+34918159294' }, { label: 'Brunete', number: '918 15 86 73', href: 'tel:+34918158673' }]

const SOCIAL_LINKS = [{ label: 'Facebook', href: 'https://www.facebook.com/aratadopta', icon: 'bi-facebook' }, { label: 'Instagram', href: 'https://www.instagram.com/aratadopta', icon: 'bi-instagram' }]

const CENTER_LOCATIONS = [{ city: 'Torrelodones', lines: ['Paseo Joaquín Ruiz Gimenez 30', '28250 Torrelodones, Madrid'] }, { city: 'Brunete', lines: ['Carretera M513 km 14.900', '28690 Brunete, Madrid'] }]

function getDigits(value) {
  return value.replace(/\D/g, '')
}

function validateField(name, value) {
  const trimmedValue = value.trim()

  if (name === 'nombre') {
    if (!trimmedValue) return 'El nombre es obligatorio.'
    if (trimmedValue.length < 2) return 'El nombre debe tener al menos 2 caracteres.'
    if (trimmedValue.length > 40) return 'El nombre no puede superar los 40 caracteres.'
    return ''
  }

  if (name === 'correo') {
    if (!trimmedValue) return 'El correo electrónico es obligatorio.'
    if (!EMAIL_REGEX.test(trimmedValue)) return 'Introduce un correo electrónico válido.'
    return ''
  }

  if (name === 'telefono') {
    if (!trimmedValue) return ''
    if (!PHONE_ALLOWED_REGEX.test(trimmedValue)) return 'El teléfono contiene caracteres no válidos.'
    const phoneDigits = getDigits(trimmedValue)
    if (phoneDigits.length < 9) return 'El teléfono debe tener al menos 9 dígitos.'
    if (phoneDigits.length > 15) return 'El teléfono no puede superar los 15 dígitos.'
    return ''
  }

  if (name === 'asunto') {
    if (!trimmedValue) return 'El asunto es obligatorio.'
    if (trimmedValue.length < 4) return 'El asunto debe tener al menos 4 caracteres.'
    if (trimmedValue.length > 120) return 'El asunto no puede superar los 120 caracteres.'
    return ''
  }

  if (name === 'mensaje') {
    if (!trimmedValue) return 'El mensaje es obligatorio.'
    if (trimmedValue.length < 20) return 'El mensaje debe tener al menos 20 caracteres.'
    if (trimmedValue.length > 2500) return 'El mensaje no puede superar los 2500 caracteres.'
    return ''
  }

  return ''
}

function validateForm(values) {
  const fields = ['nombre', 'correo', 'telefono', 'asunto', 'mensaje']
  return fields.reduce((errors, fieldName) => {
    const error = validateField(fieldName, values[fieldName] || '')
    if (error) errors[fieldName] = error
    return errors
  }, {})
}

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
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 100)
    }
  }, [hash])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFeedback(null)

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateForm(formData)
    if (Object.keys(nextErrors).length > 0) {
      setTouched({ nombre: true, correo: true, telefono: true, asunto: true, mensaje: true })
      setErrors(nextErrors)
      setFeedback({ type: 'error', text: 'No se envió el formulario: revisa los campos marcados y vuelve a intentarlo.' })
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFeedback({ type: 'error', text: 'El servicio de correo no está configurado. Contacta directamente a gestion@aratadopta.com.' })
      return
    }
    setSending(true)
    setFeedback(null)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setFeedback({ type: 'success', text: 'Tu mensaje se envió correctamente. Te responderemos por correo lo antes posible.' })
      setFormData({ nombre: '', correo: '', telefono: '', asunto: '', mensaje: '' })
      setErrors({})
      setTouched({})
    } catch {
      setFeedback({ type: 'error', text: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos a gestion@aratadopta.com.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <Header />
      <main className="page page--contact">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Contacto</h1>
            {HERO_PARAGRAPHS.map((paragraph) => (<p key={paragraph} className="page-hero-text">{paragraph}</p>))}
          </div>
        </section>

        <div className="page-container page-container--wide">
          <div className="contact-layout">
            <div className="contact-sidebar">
              <section className="contact-info-block">
                <h2 className="page-section-title">Información de contacto</h2>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Emails</h3>
                  {CONTACT_EMAILS.map((item) => (<p key={item.label} className="contact-detail-value"><a href={item.href}>{item.label}</a></p>))}
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Teléfonos</h3>
                  {CONTACT_PHONES.map((item) => (<p key={item.label} className="contact-detail-value">{item.label}: <a href={item.href}>{item.number}</a></p>))}
                </div>
                <div className="contact-detail">
                  <h3 className="contact-detail-label">Redes sociales</h3>
                  <div className="contact-social">
                    {SOCIAL_LINKS.map((item) => (<a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="contact-social-link"><i className={`bi ${item.icon}`}></i><span>{item.label}</span></a>))}
                  </div>
                </div>
              </section>

              <section className="contact-locations-block">
                <h2 className="page-section-title">¿Dónde nos encontramos?</h2>
                {CENTER_LOCATIONS.map((location) => (
                  <div key={location.city} className="contact-detail">
                    <h3 className="contact-detail-label">{location.city}</h3>
                    {location.lines.map((line) => (<p key={line} className="contact-detail-value">{line}</p>))}
                  </div>
                ))}
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
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="contact-field">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Tu nombre completo"
                    disabled={sending}
                    maxLength="80"
                    aria-invalid={Boolean(errors.nombre)}
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    className={errors.nombre ? 'contact-input--error' : ''}
                  />
                  {errors.nombre && <p id="nombre-error" className="contact-field-error">{errors.nombre}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="correo">Correo electrónico *</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="tu@email.com"
                    disabled={sending}
                    maxLength="120"
                    aria-invalid={Boolean(errors.correo)}
                    aria-describedby={errors.correo ? 'correo-error' : undefined}
                    className={errors.correo ? 'contact-input--error' : ''}
                  />
                  {errors.correo && <p id="correo-error" className="contact-field-error">{errors.correo}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="600 000 000"
                    disabled={sending}
                    maxLength="25"
                    aria-invalid={Boolean(errors.telefono)}
                    aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                    className={errors.telefono ? 'contact-input--error' : ''}
                  />
                  {errors.telefono && <p id="telefono-error" className="contact-field-error">{errors.telefono}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="asunto">Asunto *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="¿Sobre qué quieres contactarnos?"
                    disabled={sending}
                    maxLength="120"
                    aria-invalid={Boolean(errors.asunto)}
                    aria-describedby={errors.asunto ? 'asunto-error' : undefined}
                    className={errors.asunto ? 'contact-input--error' : ''}
                  />
                  {errors.asunto && <p id="asunto-error" className="contact-field-error">{errors.asunto}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows="6"
                    placeholder="Escribe tu mensaje aquí..."
                    disabled={sending}
                    maxLength="2500"
                    aria-invalid={Boolean(errors.mensaje)}
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    className={errors.mensaje ? 'contact-input--error' : ''}
                  />
                  {errors.mensaje && <p id="mensaje-error" className="contact-field-error">{errors.mensaje}</p>}
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
