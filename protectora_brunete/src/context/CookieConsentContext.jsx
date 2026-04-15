import { useCallback, useEffect, useMemo, useState } from 'react'
import { COOKIE_CONSENT_STORAGE_KEY } from '../constants/cookieConsent.js'
import { CookieConsentContext } from './cookieConsentContextDef.js'

/** @typedef {'choice_needed' | 'necessary_only' | 'all'} CookieConsentStatus */

function readStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (raw === 'all' || raw === 'necessary_only') return raw
  } catch {
    /* ignore */
  }
  return null
}

function getInitialStatus() {
  if (typeof window === 'undefined') return 'choice_needed'
  const stored = readStoredConsent()
  if (stored === 'all') return 'all'
  if (stored === 'necessary_only') return 'necessary_only'
  return 'choice_needed'
}

export function CookieConsentProvider({ children }) {
  const [status, setStatus] = useState(/** @type {CookieConsentStatus} */ (getInitialStatus))

  useEffect(() => {
    document.body.classList.toggle('cookie-banner-visible', status === 'choice_needed')
    return () => document.body.classList.remove('cookie-banner-visible')
  }, [status])

  const save = useCallback((value) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    setStatus(value === 'all' ? 'all' : 'necessary_only')
  }, [])

  const acceptAll = useCallback(() => save('all'), [save])
  const acceptNecessaryOnly = useCallback(() => save('necessary_only'), [save])

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setStatus('choice_needed')
  }, [])

  const value = useMemo(
    () => ({
      status,
      showBanner: status === 'choice_needed',
      optionalCookiesAllowed: status === 'all',
      acceptAll,
      acceptNecessaryOnly,
      resetConsent,
    }),
    [status, acceptAll, acceptNecessaryOnly, resetConsent]
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}
