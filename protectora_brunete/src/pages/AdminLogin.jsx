import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validateLoginField(name, value) {
  const trimmedValue = value.trim()

  if (name === 'email') {
    if (!trimmedValue) return 'El email es obligatorio.'
    if (!EMAIL_REGEX.test(trimmedValue)) return 'Introduce un email válido.'
    return ''
  }

  if (name === 'password') {
    if (!value) return 'La contraseña es obligatoria.'
    if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres.'
    if (value.length > 128) return 'La contraseña no puede superar los 128 caracteres.'
    return ''
  }

  return ''
}

function validateLoginForm(values) {
  const fields = ['email', 'password']
  return fields.reduce((errors, fieldName) => {
    const error = validateLoginField(fieldName, values[fieldName] || '')
    if (error) errors[fieldName] = error
    return errors
  }, {})
}

function AdminLogin() {
  usePageTitle('Iniciar sesión')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [touched, setTouched] = useState({})
  const navigate = useNavigate()

  const handleChange = (name, value) => {
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
    setError('')

    if (touched[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: validateLoginField(name, value) }))
    }
  }

  const handleBlur = (name, value) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    setFieldErrors(prev => ({ ...prev, [name]: validateLoginField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const values = { email, password }
    const nextErrors = validateLoginForm(values)
    if (Object.keys(nextErrors).length > 0) {
      setTouched({ email: true, password: true })
      setFieldErrors(nextErrors)
      return
    }

    setLoading(true)

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })

    if (authError) {
      setError('Email o contraseña incorrectos.')
      setLoading(false)
    } else {
      navigate('/hsdkadmin/panel')
    }
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

        <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
          <div className="admin-login-field">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={(e) => handleBlur('email', e.target.value)}
              placeholder="Email"
              autoComplete="email"
              required
              maxLength="120"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'admin-email-error' : undefined}
              className={fieldErrors.email ? 'admin-input--error' : ''}
            />
            {fieldErrors.email && <p id="admin-email-error" className="admin-login-field-error">{fieldErrors.email}</p>}
          </div>

          <div className="admin-login-field">
            <label htmlFor="admin-password">Contraseña</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={(e) => handleBlur('password', e.target.value)}
              placeholder="Contraseña"
              autoComplete="current-password"
              required
              maxLength="128"
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={fieldErrors.password ? 'admin-password-error' : undefined}
              className={fieldErrors.password ? 'admin-input--error' : ''}
            />
            {fieldErrors.password && <p id="admin-password-error" className="admin-login-field-error">{fieldErrors.password}</p>}
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
