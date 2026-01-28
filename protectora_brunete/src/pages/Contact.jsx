import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
  }

  return (
    <div>
      <Header />
      <main className="contact-page">
       <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info-section">
            <section className="contact-info">
              <h2>Información de contacto</h2>
              <div className="info-item">
                <h3>Emails</h3>
                <p><a href="mailto:aratadopciones@gmail.com">aratadopciones@gmail.com</a></p>
                <p><a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a></p>
              </div>
              <div className="info-item">
                <h3>Teléfonos</h3>
                <p>Torrelodones: <a href="tel:+34918159294">918 15 92 94</a></p>
                <p>Brunete: <a href="tel:+34918158673">918 15 86 73</a></p>
              </div>
              <div className="info-item">
                <h3>Redes sociales</h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i><span>Facebook</span></a>
                  <a href="https://www.instagram.com/aratadopta" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i><span>Instagram</span></a>
                </div>
              </div>
            </section>

            <section className="contact-locations">
              <h2>¿Dónde nos encontramos?</h2>
              <div className="location-item">
                <h3>Torrelodones</h3>
                <p>Paseo Joaquín Ruiz Gimenez 30</p>
                <p>28250 Torrelodones, Madrid</p>
              </div>
              <div className="location-item">
                <h3>Brunete</h3>
                <p>Carretera M513 km 14.900</p>
                <p>28690 Brunete, Madrid</p>
              </div>
            </section>
          </div>

          <section className="contact-form-section">
            <h2>Envíanos un mensaje</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Tu nombre completo" />
              </div>

              <div className="form-group">
                <label htmlFor="correo">Correo electrónico *</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required placeholder="tu@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="600 000 000" />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="¿Sobre qué quieres contactarnos?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="6" placeholder="Escribe tu mensaje aquí..." />
              </div>

              <button type="submit" className="submit-button">Enviar mensaje</button>
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
