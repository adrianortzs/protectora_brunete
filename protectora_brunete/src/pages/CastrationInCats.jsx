import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

function CastrationInCats() {
  usePageTitle('Castración en gatos')
  return (
    <div>
      <Header />
      <main className="page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Castración en gatos</h1>
            <span className="page-hero-text">
              La posibilidad de castrar a tu gato es una de las decisiones más importantes que tendrás que tomar como propietario.
            </span>
          </div>
        </section>

        <div className="page-container">
          <section className="page-section">
            <h2 className="page-section-title">Ventajas de la castración</h2>
            <span className="page-text">
              La castración tiene muchas ventajas. Lo primero y más importante es que evita el riesgo de embarazos no deseados y ayuda a reducir la población de gatos callejeros. Además, reduce la probabilidad de que tu gato sufra determinadas enfermedades y se comporte de forma poco sociable.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-1-circle page-section-icon"></i>
              Beneficios físicos
            </h2>
            <span className="page-text">
              En hembras, la castración elimina el riesgo de sufrir enfermedades relacionadas con los ovarios o el útero, como por ejemplo cáncer, piometra, ovarios poliquísticos y metritis. También reduce el riesgo de enfermedades inducidas por hormonas, como por ejemplo cáncer de mama o falsos embarazos.
            </span>
            <span className="page-text">
              En machos, la castración elimina el riesgo de sufrir enfermedades relacionadas con los testículos, como por ejemplo cáncer, y reduce el riesgo de sufrir enfermedades inducidas por la testosterona, como la prostatitis, adenomas y hernias perianales, e hiperplasia prostática benigna.
            </span>
            <span className="page-text">
              Tanto en hembras como en machos, la castración también evita la propagación de enfermedades de transmisión genética y la frustración sexual.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">
              <i className="bi bi-2-circle page-section-icon"></i>
              Beneficios en el comportamiento
            </h2>
            <span className="page-text">
              La castración provoca la reducción de hormonas sexuales como el estrógeno, la progesterona y la testosterona. Aunque las hormonas seguirán presentes, sus niveles serán notablemente inferiores, lo cual tiene un efecto directo en el comportamiento:
            </span>
            <span className="page-text">
              En machos, la castración reduce la probabilidad de que orine donde no debe y presente otros comportamientos territoriales, como que se pelee con otros gatos. Además, reduce la tendencia a vagar lejos de casa.
            </span>
            <span className="page-text">
              En hembras, la castración puede reducir el interés en los gatos macho y su propensión a mostrarse excesivamente afectivas o agresivas.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Cuándo se debe llevar a cabo</h2>
            <span className="page-text">
              El veterinario te recomendará cuál es el mejor momento para realizar la castración, pero por lo general la operación se lleva a cabo unos seis meses antes de que la mascota llegue a su edad de madurez sexual. Sin embargo, según el país donde vivas y las recomendaciones de tu veterinario, la castración se puede realizar a partir de las ocho semanas de vida.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">La operación</h2>
            <span className="page-text">
              La castración de un macho implica la retirada de ambos testículos. La castración de una hembra, a veces llamada esterilización, implica la retirada de ambos ovarios y, en ocasiones, también del útero.
            </span>
            <span className="page-text">
              La castración implica una operación quirúrgica importante, aunque se considera una intervención de rutina y el riesgo de que surjan complicaciones es bajo. Tras una operación satisfactoria, normalmente puedes llevarte a tu gato de vuelta a casa el mismo día de la intervención, y puede, o no, que los puntos sean visibles.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Después de la operación</h2>
            <span className="page-text">
              Intenta mantener a tu gato en casa durante al menos 3 días tras la operación para minimizar el riesgo de infecciones y para que puedas ir comprobando el aspecto de la región operada. Si detectas algún enrojecimiento o inflamación, o alguna secreción anormal alrededor de la herida, tanto si se trata de un macho como una hembra, es importante que te pongas en contacto con tu veterinario de inmediato.
            </span>
            <span className="page-text">
              Por lo general, los gatos macho no llevan puntos tras la operación y, aunque pueden quedar un poco adormilados durante las primeras 24 horas, suelen volver a sus travesuras con bastante rapidez.
            </span>
            <span className="page-text">
              A las hembras puede llevarles un poco más de tiempo recuperarse, ya que su operación quirúrgica es más complicada. Lo más importante que debes hacer para ayudarles a que se recuperen es procurar que no se muevan demasiado durante los primeros días y que no den saltos durante el tiempo en que se esté curando la incisión de la operación.
            </span>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Nutrición</h2>
            <span className="page-text">
              Después de una intervención quirúrgica, también es de gran importancia darle a tu gato una dieta altamente nutritiva, puesto que su cuerpo requiere nutrientes para curarse debidamente.
            </span>
            <span className="page-text">
              Una vez que tu gato se haya recuperado del todo, también es importante plantearse cambiar su alimentación para gatitos, que suele tener un alto contenido calórico, por una dieta de mantenimiento con menos calorías, puesto que los gatos castrados tienen tendencia a ganar peso. Esto se debe a que adoptan un estilo de vida más sedentario, gastan menos energía (por ejemplo, se reducen sus actividades sexuales) y a que su apetito aumenta. Estos cambios vienen dados por la reducción en la producción y secreción de hormonas sexuales.
            </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CastrationInCats
