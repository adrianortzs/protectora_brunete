import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './pages/Contact'
import WantToAdopt from './pages/WantToAdopt'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopta" element={<WantToAdopt />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
