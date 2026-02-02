import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import WantToAdopt from './pages/WantToAdopt'
import AnimalsInAdoption from './pages/AnimalsInAdoption'
import WhoAreWe from './pages/WhoAreWe'
import FosterHome from './pages/FosterHome'
import WantToBeVolunteer from './pages/WantToBeVolunteer'
import MaterialDonations from './pages/MaterialDonations'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopta" element={<WantToAdopt />} />
        <Route path="/animales-en-adopcion" element={<AnimalsInAdoption />} />
        <Route path="/animales-en-adopcion/:animalType" element={<AnimalsInAdoption />} />
        <Route path="/quienes-somos" element={<WhoAreWe />} />
        <Route path="/colabora/casa-acogida" element={<FosterHome />} />
        <Route path="/colabora/hazte-voluntario" element={<WantToBeVolunteer />} />
        <Route path="/colabora/realiza-donativo" element={<MaterialDonations />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
