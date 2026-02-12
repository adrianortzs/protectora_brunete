import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import WantToAdopt from './pages/WantToAdopt'
import AnimalsInAdoption from './pages/AnimalsInAdoption'
import HappyEndings from './pages/HappyEndings'
import WhoAreWe from './pages/WhoAreWe'
import FosterHome from './pages/FosterHome'
import WantToBeVolunteer from './pages/WantToBeVolunteer'
import MaterialDonations from './pages/MaterialDonations'
import AdminLogin from './pages/AdminLogin'
import AdminPanel from './pages/AdminPanel'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopción" element={<WantToAdopt />} />
        <Route path="/animales-en-adopción" element={<AnimalsInAdoption />} />
        <Route path="/animales-en-adopción/:animalType" element={<AnimalsInAdoption />} />
        <Route path="/finales-felices" element={<HappyEndings />} />
        <Route path="/quiénes-somos" element={<WhoAreWe />} />
        <Route path="/colaboración/casa-de-acogida" element={<FosterHome />} />
        <Route path="/colaboración/voluntariado" element={<WantToBeVolunteer />} />
        <Route path="/colaboración/donaciones" element={<MaterialDonations />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/política-de-cookies" element={<CookiesPolicy />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  )
}

export default App
