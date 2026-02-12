import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Política de Privacidad</h1>
            <span className="collab-hero-text">
              Última actualización: 1 de enero de 2026
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">Responsable del tratamiento</h2>
            <span className="collab-text">
              El responsable del tratamiento de los datos personales es:
            </span>
            <ul className="collab-list">
              <li><strong>Denominación social:</strong> Arat Veterinarios Torrelodones S.L.</li>
              <li><strong>Domicilio:</strong> Paseo Joaquín Ruiz Giménez 30, 28250 Torrelodones, Madrid</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a></li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Qué datos personales recogemos?</h2>
            <span className="collab-text">
              A través de este sitio web podemos recoger los siguientes datos personales:
            </span>
            <ul className="collab-list">
              <li><strong>Datos identificativos:</strong> nombre y apellidos.</li>
              <li><strong>Datos de contacto:</strong> correo electrónico y número de teléfono.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita, obtenidos a través de cookies y tecnologías similares.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Con qué finalidad tratamos tus datos?</h2>
            <span className="collab-text">
              Los datos personales que nos facilites serán tratados con las siguientes finalidades:
            </span>
            <ul className="collab-list">
              <li><strong>Gestión de consultas:</strong> responder a los mensajes enviados a través del formulario de contacto.</li>
              <li><strong>Gestión de adopciones:</strong> tramitar solicitudes de adopción de animales y realizar el seguimiento posterior.</li>
              <li><strong>Gestión del voluntariado:</strong> procesar solicitudes de colaboración como voluntario o casa de acogida.</li>
              <li><strong>Gestión de donaciones:</strong> coordinar la recepción de donaciones materiales.</li>
              <li><strong>Mejora del sitio web:</strong> analizar el uso del sitio para mejorar su funcionamiento y la experiencia del usuario.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Base legal del tratamiento</h2>
            <span className="collab-text">
              La base legal para el tratamiento de tus datos personales depende de cada finalidad:
            </span>
            <ul className="collab-list">
              <li><strong>Consentimiento:</strong> al enviar el formulario de contacto o solicitar información sobre adopción, voluntariado o donaciones, prestas tu consentimiento para el tratamiento de los datos facilitados.</li>
              <li><strong>Interés legítimo:</strong> para la mejora del sitio web y el análisis estadístico de su uso.</li>
              <li><strong>Cumplimiento legal:</strong> para atender obligaciones legales aplicables en materia de protección animal, conforme a la Ley 4/2016 de Protección de los Animales de Compañía de la Comunidad de Madrid.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Durante cuánto tiempo conservamos tus datos?</h2>
            <span className="collab-text">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad.
            </span>
            <span className="collab-text">
              En particular:
            </span>
            <ul className="collab-list">
              <li>Los datos obtenidos a través del formulario de contacto se conservarán mientras sea necesario para atender la consulta y, posteriormente, durante los plazos legales aplicables.</li>
              <li>Los datos relativos a adopciones se conservarán de forma indefinida para garantizar el seguimiento del bienestar del animal.</li>
              <li>Los datos de navegación y cookies se conservarán conforme a lo indicado en nuestra Política de Cookies.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿A quién comunicamos tus datos?</h2>
            <span className="collab-text">
              Los datos personales no se cederán a terceros, salvo obligación legal. En particular:
            </span>
            <ul className="collab-list">
              <li>No vendemos ni compartimos datos personales con fines comerciales.</li>
              <li>Podemos comunicar datos a las administraciones públicas competentes cuando sea legalmente exigible (por ejemplo, en procesos de adopción o registro de animales).</li>
              <li>Utilizamos proveedores de servicios tecnológicos (como Supabase para la base de datos) que actúan como encargados del tratamiento y que ofrecen garantías adecuadas de protección de datos.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">¿Cuáles son tus derechos?</h2>
            <span className="collab-text">
              De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), puedes ejercer los siguientes derechos:
            </span>
            <ul className="collab-list">
              <li><strong>Derecho de acceso:</strong> conocer si estamos tratando tus datos personales y, en caso afirmativo, obtener una copia de los mismos.</li>
              <li><strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Derecho de supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos.</li>
              <li><strong>Derecho de oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
              <li><strong>Derecho de limitación:</strong> solicitar la limitación del tratamiento de tus datos en los casos previstos legalmente.</li>
              <li><strong>Derecho de portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
            </ul>
            <span className="collab-text">
              Para ejercer cualquiera de estos derechos, puedes contactar con nosotros a través del correo electrónico <a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a>, indicando tu solicitud y adjuntando copia de tu DNI o documento identificativo equivalente.
            </span>
            <span className="collab-text">
              Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Seguridad de los datos</h2>
            <span className="collab-text">
              Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Modificaciones</h2>
            <span className="collab-text">
              Nos reservamos el derecho a modificar esta política de privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a cambios en nuestras prácticas. Te recomendamos revisarla periódicamente.
            </span>
            <span className="collab-text">
              Cualquier modificación será publicada en esta misma página con la fecha de actualización correspondiente.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
