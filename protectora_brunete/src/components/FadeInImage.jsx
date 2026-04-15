import { useState } from 'react'
import './fade-in-image.css'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Imagen con transición suave al cargar y soporte de caché (complete).
 * En error marca como cargada para no dejar la UI a medias.
 */
export default function FadeInImage(props) {
  const src = props.src
  return <FadeInImageInner key={src ?? ''} {...props} />
}

function FadeInImageInner({ className = '', onLoad, onError, ...props }) {
  const [loaded, setLoaded] = useState(prefersReducedMotion)

  const cls = `${className} image-fade-in${loaded ? ' image-fade-in--loaded' : ''}`.trim()

  return (
    <img
      {...props}
      className={cls}
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      onError={(e) => {
        setLoaded(true)
        onError?.(e)
      }}
    />
  )
}
