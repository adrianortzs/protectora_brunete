import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import WantToAdopt from './pages/WantToAdopt'
import AnimalsInAdoption from './pages/AnimalsInAdoption'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopta" element={<WantToAdopt />} />
        <Route path="/animales-en-adopcion" element={<AnimalsInAdoption />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
