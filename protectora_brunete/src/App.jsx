import { useCallback, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { CookieConsentProvider } from './context/CookieConsentContext'
import CookieBanner from './components/CookieBanner'
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
import CER from './pages/CER'
import CastrationInCats from './pages/CastrationInCats'
import AdminLogin from './pages/AdminLogin'
import AdminPanel from './pages/AdminPanel'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function AppScrollBridge() {
  const { pathname } = useLocation()
  const pathnameRef = useRef(pathname)
  const lenisRef = useRef(null)

  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

  const syncLenis = useCallback(() => {
    lenisRef.current?.destroy()
    lenisRef.current = null
    const p = pathnameRef.current
    const narrow = window.matchMedia('(max-width: 768px)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (p.startsWith('/hsdkadmin') || reduceMotion || !narrow) return
    lenisRef.current = new Lenis({
      autoRaf: true,
      lerp: 0.078,
      touchMultiplier: 0.64,
      smoothWheel: false,
      allowNestedScroll: true,
    })
  }, [])

  useEffect(() => {
    syncLenis()
    const mq = window.matchMedia('(max-width: 768px)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => syncLenis()
    mq.addEventListener('change', onChange)
    reduceMotion.addEventListener('change', onChange)
    return () => {
      mq.removeEventListener('change', onChange)
      reduceMotion.removeEventListener('change', onChange)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [pathname, syncLenis])

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <CookieConsentProvider>
        <AppScrollBridge />
        <CookieBanner />
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
          <Route path="/gestión-felina/cer" element={<CER />} />
          <Route path="/gestión-felina/castración" element={<CastrationInCats />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/términos-y-condiciones" element={<TermsAndConditions />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/política-de-cookies" element={<CookiesPolicy />} />
          <Route path="/hsdkadmin/login" element={<AdminLogin />} />
          <Route path="/hsdkadmin/panel" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CookieConsentProvider>
    </Router>
  )
}

export default App
