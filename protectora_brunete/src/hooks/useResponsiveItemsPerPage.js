import { useState, useEffect } from 'react'
import { ITEMS_PER_PAGE, ITEMS_PER_PAGE_MOBILE } from '../utils/pagination'

const MOBILE_MEDIA_QUERY = '(max-width: 768px)'

function getInitialItemsPerPage() {
  if (typeof window === 'undefined') return ITEMS_PER_PAGE
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE
}

export function useResponsiveItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(getInitialItemsPerPage)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MEDIA_QUERY)
    const update = () => {
      setItemsPerPage(mq.matches ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return itemsPerPage
}
