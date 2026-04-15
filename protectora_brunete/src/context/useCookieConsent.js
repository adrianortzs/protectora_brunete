import { useContext } from 'react'
import { CookieConsentContext } from './cookieConsentContextDef.js'

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}
