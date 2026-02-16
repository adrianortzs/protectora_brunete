import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'

const REQUESTS = [
  'Mi vida es mucho más corta que la tuya (vivo entre 10 y 15 años), pero aun así, ¡es intensa! Antes de llevarme contigo, piensa si podrás acompañarme hasta el final.',
  'Ten paciencia conmigo. A veces no entiendo tus palabras, pero siempre intento entender tu corazón.',
  'Dame confianza. Cuando me miras con cariño, mi mundo está en orden.',
  'No me castigues con tu enfado ni me apartes de ti. Tú tienes muchas cosas y muchas personas. Yo solo te tengo a ti.',
  'Háblame. Aunque no comprenda todo lo que dices, reconozco tu voz… y en ella encuentro calma.',
  'Trátame con respeto. Cada gesto tuyo queda guardado para siempre en mi memoria.',
  'Antes de levantar la mano contra mí, recuerda que podría defenderme… pero elijo quererte.',
  'Si un día no obedezco o no tengo fuerzas, mírame con compasión. Tal vez me duele algo, tal vez estoy cansado, tal vez simplemente no me siento bien.',
  'Cuídame cuando envejezca. Caminaré más despacio, dormiré más… pero mi amor por ti seguirá intacto.',
  'Y cuando llegue mi último momento, quédate a mi lado. No me dejes ir solo. Si estás conmigo, incluso el adiós será más llevadero.'
]

function DogRequests() {
  return (
    <div>
      <Header />
      <main className="collab-page">
        <section className="collab-hero">
          <div className="collab-hero-content">
            <h1 className="collab-hero-title">10 peticiones de un perro</h1>
            <span className="collab-hero-text">
              Antes de adoptar, escucha lo que un perro te pediría si pudiera hablar.
            </span>
          </div>
        </section>

        <div className="collab-container">
          <ol className="dog-requests-list">
            {REQUESTS.map((text, i) => (
              <li key={i} className="dog-request-item">
                <span className="dog-request-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="dog-request-text">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DogRequests
