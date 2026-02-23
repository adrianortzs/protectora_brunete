import { useEffect } from 'react'

const SUFFIX = 'Arat Adopta'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX
    return () => { document.title = SUFFIX }
  }, [title])
}
