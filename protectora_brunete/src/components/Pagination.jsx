import './components.css'

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const scrollToFirstCard = () => {
    window.requestAnimationFrame(() => {
      const firstAnimalCard = document.querySelector('.animals-grid .animal-card, .admin-grid .admin-card')
      if (firstAnimalCard) {
        firstAnimalCard.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  const goToPage = (nextPage) => {
    const safeNextPage = Math.min(totalPages, Math.max(1, nextPage))
    if (safeNextPage === currentPage) return
    onPageChange(safeNextPage)
    scrollToFirstCard()
  }

  return (
    <nav className="pagination" aria-label="Paginación">
      <button type="button" className="pagination-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} aria-label="Ir a la página anterior">
        <i className="bi bi-chevron-left"></i> Anterior
      </button>
      <span className="pagination-info" aria-live="polite">
        Página {currentPage} de {totalPages}
      </span>
      <button type="button" className="pagination-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages} aria-label="Ir a la página siguiente">
        Siguiente <i className="bi bi-chevron-right"></i>
      </button>
    </nav>
  )
}

export { Pagination }
