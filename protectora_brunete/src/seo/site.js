export const SITE_NAME = 'Arat Adopta'

export const DEFAULT_DESCRIPTION =
  'Somos una protectora de animales domésticos en Brunete y Torrelodones. Animales en adopción; recogida de animales perdidos o abandonados las 24 horas. Protección y bienestar de animales domésticos.'

export function getAbsoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  const base = typeof import.meta.env.VITE_SITE_URL === 'string'
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
    : ''
  if (base) return `${base}${path}`
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${path}`
  }
  return path
}
