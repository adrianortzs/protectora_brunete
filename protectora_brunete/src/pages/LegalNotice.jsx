import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function LegalNotice() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">Aviso Legal</h1>
            <span className="collab-hero-text">
              Última actualización: 1 de enero de 2026
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">Identificación del titular</h2>
            <span className="collab-text">
              En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del titular de este sitio web:
            </span>
            <ul className="collab-list">
              <li><strong>Denominación social:</strong> Arat Veterinarios Torrelodones S.L.</li>
              <li><strong>Domicilio social:</strong> Paseo Joaquín Ruiz Giménez 30, 28250 Torrelodones, Madrid</li>
              <li><strong>Centro de acogida:</strong> Carretera M513 km 14.900, 28690 Brunete, Madrid</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a></li>
              <li><strong>Teléfono Torrelodones:</strong> <a href="tel:+34918159294">918 15 92 94</a></li>
              <li><strong>Teléfono Brunete:</strong> <a href="tel:+34918158673">918 15 86 73</a></li>
              <li><strong>Número de registro del centro de acogida:</strong> ES280261000001</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Objeto del sitio web</h2>
            <span className="collab-text">
              Este sitio web tiene como finalidad informar sobre la actividad de Arat Veterinarios Torrelodones S.L. en materia de protección y bienestar animal, incluyendo los servicios de acogida, adopción responsable, voluntariado, casas de acogida y donaciones materiales.
            </span>
            <span className="collab-text">
              Asimismo, facilita información de contacto y herramientas de comunicación para las personas interesadas en colaborar o adoptar.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Condiciones de uso</h2>
            <span className="collab-text">
              El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este aviso legal, así como de la Política de Privacidad y la Política de Cookies.
            </span>
            <span className="collab-text">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web, absteniéndose de:
            </span>
            <ul className="collab-list">
              <li>Realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, ilegal o que atente contra los derechos fundamentales.</li>
              <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceros.</li>
              <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas que sean susceptibles de provocar daños.</li>
              <li>Intentar acceder, utilizar o manipular los datos de terceros usuarios o del administrador.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Propiedad intelectual e industrial</h2>
            <span className="collab-text">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Arat Veterinarios Torrelodones S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
            </span>
            <span className="collab-text">
              Las fotografías de los animales publicadas en este sitio web son propiedad de Arat Veterinarios Torrelodones S.L. y no podrán ser reproducidas, distribuidas ni utilizadas con fines comerciales sin autorización expresa.
            </span>
            <span className="collab-text">
              Queda prohibida la reproducción total o parcial de los contenidos del sitio web sin la autorización previa y por escrito del titular, excepto en los casos permitidos por la legislación vigente.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Exclusión de responsabilidad</h2>
            <span className="collab-text">
              Arat Veterinarios Torrelodones S.L. no se hace responsable de:
            </span>
            <ul className="collab-list">
              <li>La falta de disponibilidad, mantenimiento o continuidad del sitio web o de sus servicios.</li>
              <li>Los errores u omisiones en los contenidos publicados, aunque se esfuerza por mantenerlos actualizados y correctos.</li>
              <li>La presencia de virus o elementos lesivos en los contenidos que pudieran producir alteraciones en los sistemas informáticos, documentos electrónicos o ficheros de los usuarios.</li>
              <li>Los daños y perjuicios derivados del uso inadecuado del sitio web por parte de los usuarios.</li>
              <li>Los contenidos de sitios web de terceros a los que se pueda acceder a través de enlaces incluidos en este sitio.</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Enlaces a terceros</h2>
            <span className="collab-text">
              Este sitio web puede contener enlaces a páginas externas (redes sociales, plataformas de vídeo u otros sitios). Estos enlaces se proporcionan únicamente a título informativo y no implican que Arat Veterinarios Torrelodones S.L. avale, patrocine o recomiende dichos sitios web ni sus contenidos.
            </span>
            <span className="collab-text">
              Arat Veterinarios Torrelodones S.L. no asume responsabilidad alguna por los contenidos, políticas de privacidad o prácticas de sitios web de terceros.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Legislación aplicable y jurisdicción</h2>
            <span className="collab-text">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia relacionada con este sitio web o con las actividades desarrolladas en él, serán competentes los Juzgados y Tribunales de Madrid, salvo que la normativa aplicable disponga otra cosa.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Normativa de referencia</h2>
            <span className="collab-text">
              La actividad de Arat Veterinarios Torrelodones S.L. se rige, entre otras, por las siguientes normas:
            </span>
            <ul className="collab-list">
              <li>Ley 4/2016, de 22 de julio, de Protección de los Animales de Compañía de la Comunidad de Madrid.</li>
              <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
              <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD).</li>
              <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD).</li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">Contacto</h2>
            <span className="collab-text">
              Para cualquier consulta relacionada con este aviso legal, puedes ponerte en contacto con nosotros a través del correo electrónico <a href="mailto:gestion@aratadopta.com">gestion@aratadopta.com</a>.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LegalNotice
