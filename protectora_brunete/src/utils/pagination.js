const ITEMS_PER_PAGE = 12

function paginate(items, currentPage) {
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginated = items.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)
  return { paginated, totalPages, safePage }
}

export { ITEMS_PER_PAGE, paginate }
