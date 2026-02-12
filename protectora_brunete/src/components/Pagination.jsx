import './components.css'

const ITEMS_PER_PAGE = 15

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <nav className="pagination" aria-label="Paginación">
      <button
        type="button"
        className="pagination-btn"
        onClick={() => { onPageChange(Math.max(1, currentPage - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        disabled={currentPage <= 1}
      >
        <i className="bi bi-chevron-left"></i> Anterior
      </button>
      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>
      <button
        type="button"
        className="pagination-btn"
        onClick={() => { onPageChange(Math.min(totalPages, currentPage + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        disabled={currentPage >= totalPages}
      >
        Siguiente <i className="bi bi-chevron-right"></i>
      </button>
    </nav>
  )
}

function paginate(items, currentPage) {
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginated = items.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)
  return { paginated, totalPages, safePage }
}

export { Pagination, paginate }
