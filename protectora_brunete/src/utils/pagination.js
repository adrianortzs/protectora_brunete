const ITEMS_PER_PAGE = 12
const ITEMS_PER_PAGE_MOBILE = 10

function paginate(items, currentPage, itemsPerPage = ITEMS_PER_PAGE) {
  const perPage = itemsPerPage > 0 ? itemsPerPage : ITEMS_PER_PAGE
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const safePage = Math.min(currentPage, totalPages)
  const paginated = items.slice((safePage - 1) * perPage, safePage * perPage)
  return { paginated, totalPages, safePage }
}

export { ITEMS_PER_PAGE, ITEMS_PER_PAGE_MOBILE, paginate }
