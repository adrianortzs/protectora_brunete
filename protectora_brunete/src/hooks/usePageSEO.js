import { useEffect } from 'react'
import { DEFAULT_DESCRIPTION, SITE_NAME, getAbsoluteUrl } from '../seo/site'

const OG_IMAGE_PATH = '/arat_og.png'

function setMetaName(name, content) {
  if (content === undefined || content === null) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  if (content === undefined || content === null) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * @param {{ title: string | null, description?: string, noRobots?: boolean }} options
 * - title: null = solo nombre del sitio (home)
 */
export default function usePageSEO({ title, description, noRobots = false }) {
  useEffect(() => {
    const pageTitle = title ? `${title} – ${SITE_NAME}` : SITE_NAME
    const desc = (description && description.trim()) || DEFAULT_DESCRIPTION
    const path = `${window.location.pathname}${window.location.search || ''}`
    const canonical = getAbsoluteUrl(path)
    const imageUrl = getAbsoluteUrl(OG_IMAGE_PATH)

    document.title = pageTitle

    setMetaName('description', desc)
    setMetaProperty('og:title', pageTitle)
    setMetaProperty('og:description', desc)
    setMetaProperty('og:type', 'website')
    setMetaProperty('og:url', canonical)
    setMetaProperty('og:site_name', SITE_NAME)
    setMetaProperty('og:image', imageUrl)
    setMetaProperty('og:locale', 'es_ES')
    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', pageTitle)
    setMetaName('twitter:description', desc)

    setMetaName('robots', noRobots ? 'noindex, nofollow' : 'index, follow')
    setCanonical(canonical)

    return () => {
      document.title = SITE_NAME
    }
  }, [title, description, noRobots])
}
