import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pages.css'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'protectora2026'

function AdminLogin() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (user === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem('admin_auth', 'true')
        navigate('/admin/panel')
      } else {
        setError('Usuario o contraseña incorrectos.')
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-login-icon">
            <i className="bi bi-shield-lock"></i>
          </div>
          <h1 className="admin-login-title">Panel de Administración</h1>
          <p className="admin-login-subtitle">Introduce tus credenciales para acceder</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-login-field">
            <label htmlFor="admin-user">Usuario</label>
            <input
              id="admin-user"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Usuario"
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-login-field">
            <label htmlFor="admin-password">Contraseña</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="admin-login-error">
              <i className="bi bi-exclamation-circle"></i>
              <span>{error}</span>
            </div>
          )}

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? <span className="admin-login-spinner"></span> : 'Iniciar sesión'}
          </button>
        </form>

        <button type="button" className="admin-login-back" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left"></i> Volver al sitio web
        </button>
      </div>
    </div>
  )
}

export default AdminLogin
