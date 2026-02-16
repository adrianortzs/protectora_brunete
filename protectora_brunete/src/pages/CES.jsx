import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

function CES() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">CES – Captura, Esterilización y Suelta</h1>
            <span className="collab-hero-text">
              El método ético y eficaz para gestionar las colonias felinas urbanas.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <section className="collab-section">
            <h2 className="collab-section-title">
              <i className="bi bi-question-circle collab-section-icon"></i>
              ¿Qué es el CES?
            </h2>
            <span className="collab-text">
              Los programas de Captura Esterilización y Suelta (CES) de los gatos que viven en la calle implican la captura de los felinos sin dolor (con cajas trampa), llevarlos al veterinario para que sean esterilizados y vacunados, el marcaje de sus orejas con una pequeña muesca (es la marca para reconocer a los felinos ya esterilizados) y su vuelta a la colonia de origen.
            </span>
            <span className="collab-text">
              "Los programas CES de esterilización y suelta tienen enormes beneficios tanto para los gatos comunitarios como para los vecinos: los gatos viven vidas más sanas, la población de felinos callejeros se reduce y los vecinos dejan de sentir las molestias asociadas a la presencia de gatos no esterilizados, como ruidos, peleas u olores por marcaje", explicó Daniel López de Alley Cat, asociación referente que gestiona programas de esterilización felina callejera en Estados Unidos desde 1990, en la apertura de la Jornada Felina Europea. López, a través de vídeo, ofreció ayuda a quienes quieran poner en marcha programas similares en España. Y además recordó que Alley Cat ya tiene mucha información sobre el CES en español.
            </span>
            <span className="collab-text">
              "El método CES de esterilización y suelta es la única forma de gestión posible para los gatos callejeros, y además es responsabilidad de los ayuntamientos ponerlo en marcha", añadió Marisol Moreno, concejala de Protección Animal del Ayuntamiento de Alicante, ciudad que cuenta con 6.000 gatos callejeros censados y que financia con dinero público su esterilización y cuidados.
            </span>
          </section>

          <section className="collab-section">
            <h2 className="collab-section-title">
              <i className="bi bi-bank collab-section-icon"></i>
              ¿Por qué los ayuntamientos tienen que poner en marcha el CES?
            </h2>
            <span className="collab-text">
              "Los gatos no son un problema sino un elemento de nuestras ciudades", afirmó Ana Pérez Fuertes, concejala del Ayuntamiento de Madrid, ciudad que al fin arrancó hace seis meses su programa de esterilización y gestión ética de colonias felinas. Hoy la capital cuenta con un centro de adopción en el Parque de El Retiro y un futuro centro de esterilización municipal sólo para los gatos callejeros, con apertura prevista en 2017. El CES o esterilización de gatos en la calle es además una exigencia ineludible para cumplir las leyes de sacrificio cero de animales.
            </span>
            <span className="collab-text">
              Matar a los gatos de la calle, además de ser una práctica ilegal en cada vez más ciudades y comunidades, no sirve para erradicar el problema de la superpoblación felina. "La eutanasia nunca puede ser un método de control de gatos callejeros", dijo Eckman. Es más: cuando los gatos se van de un lugar se produce lo que los ecólogos llaman un nicho vacío. "Si los gatos desaparecen se hace el efecto vacío, y el espacio vuelve a repoblarse de gatos al poco tiempo: esterilizar es el único método de controlar la superpoblación felina y hacerlo además de forma ética", añade Moreno, que vive con Daryl, una gata ciega que ella misma rescató durante una inundación, y una cuyo ayuntamiento tiene censados 6.000 gatos callejeros que hasta cuentan con un policía municipal dedicado a su protección.
            </span>
            <span className="collab-text">
              Y cuando las leyes no llegan a tiempo, hay políticos que marcan el paso, empujados por los ciudadanos. "No es necesario que una ley te obligue para ayudar a los animales de la calle y hacer lo que sabes que tienes que hacer", dijo Ció Lerma. Sant Boi paga "la alimentación de los felinos callejeros, las esterilizaciones, los gastos veterinarios y un automóvil municipal para el uso de los voluntarios".
            </span>
            <span className="collab-text">
              "Los políticos tenemos obligaciones y hay que cumplirlas. Mucha gente entrega dinero y muchas horas de sus vidas a la protección de los gatos de la calle, un trabajo necesario al que los ayuntamientos tenemos que ayudar", añadió Lerma.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CES
