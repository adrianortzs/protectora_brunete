import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import WantToAdopt from './pages/WantToAdopt'
import AnimalsInAdoption from './pages/AnimalsInAdoption'
import HappyEndings from './pages/HappyEndings'
import WhoAreWe from './pages/WhoAreWe'
import WhereAreWe from './pages/WhereAreWe'
import FosterHome from './pages/FosterHome'
import WantToBeVolunteer from './pages/WantToBeVolunteer'
import MaterialDonations from './pages/MaterialDonations'
import DogRequests from './pages/DogRequests'
import CES from './pages/CES'
import CastrationInCats from './pages/CastrationInCats'
import StreetCats from './pages/StreetCats'
import AdminLogin from './pages/AdminLogin'
import AdminPanel from './pages/AdminPanel'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en-adopción" element={<WantToAdopt />} />
        <Route path="/animales-en-adopción" element={<AnimalsInAdoption />} />
        <Route path="/animales-en-adopción/:animalType" element={<AnimalsInAdoption />} />
        <Route path="/10-peticiones-de-un-perro" element={<DogRequests />} />
        <Route path="/finales-felices" element={<HappyEndings />} />
        <Route path="/quiénes-somos" element={<WhoAreWe />} />
        <Route path="/dónde-estamos" element={<WhereAreWe />} />
        <Route path="/colabora/casa-de-acogida" element={<FosterHome />} />
        <Route path="/colabora/voluntariado" element={<WantToBeVolunteer />} />
        <Route path="/colabora/donaciones" element={<MaterialDonations />} />
        <Route path="/gestión-felina/ces" element={<CES />} />
        <Route path="/gestión-felina/castración" element={<CastrationInCats />} />
        <Route path="/gestión-felina/gatos-callejeros" element={<StreetCats />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/términos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/política-de-cookies" element={<CookiesPolicy />} />
        <Route path="/hsdkadmin/login" element={<AdminLogin />} />
        <Route path="/hsdkadmin/panel" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
