import { useState, useEffect } from 'react'
import './components.css'

const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }

const ANIMAL_TYPE_OPTIONS = [{ value: '', label: 'Cualquiera' }, { value: 'perro', label: 'Perro' }, { value: 'gato', label: 'Gato' }]

const GENDER_OPTIONS = [{ value: '', label: 'Cualquiera' }, { value: 'macho', label: 'Macho' }, { value: 'hembra', label: 'Hembra' }]

const AGE_OPTIONS = [{ value: '', label: 'Cualquiera' }, { value: 'cachorro', label: 'Cachorro' }, { value: 'adulto', label: 'Adulto' }, { value: 'senior', label: 'Senior' }]

const SIZE_OPTIONS = [{ value: '', label: 'Cualquiera' }, { value: 'pequeño', label: 'Pequeño' }, { value: 'mediano', label: 'Mediano' }, { value: 'grande', label: 'Grande' }]

const ARRIVAL_OPTIONS = [{ value: SORT_ARRIVAL.none, label: 'Sin orden', buttonLabel: 'Sin orden' }, { value: SORT_ARRIVAL.oldest, label: 'Más antiguos primero', buttonLabel: 'Más antiguos' }, { value: SORT_ARRIVAL.newest, label: 'Más recientes primero', buttonLabel: 'Más recientes' }]

function isMobileFilterLayout() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
}

function AnimalFilter({
  filters,
  onApply,
  onClear,
  showNameSearch,
  nameSearch,
  cityHallOptions = [],
  showLocationFilters = false,
  showGeneralFilters = true
}) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [draftFilters, setDraftFilters] = useState(() => ({ ...filters }))
  const [draftNameSearch, setDraftNameSearch] = useState(() => (nameSearch || ''))

  useEffect(() => {
    setDraftFilters({ ...filters })
  }, [filters])

  useEffect(() => {
    if (showNameSearch) setDraftNameSearch(nameSearch || '')
  }, [nameSearch, showNameSearch])

  const toggleDropdown = (name) => { setOpenDropdown(prev => prev === name ? null : name) }
  const closeDropdowns = () => { setOpenDropdown(null) }
  const selectOption = (key, value) => { setDraftFilters(prev => ({ ...prev, [key]: value })); closeDropdowns() }

  const cityHallDropdownOptions = [
    { value: '', label: 'Cualquiera' },
    ...(cityHallOptions || []).map((city) => ({ value: city, label: city }))
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.filter-dropdown')) closeDropdowns()
    }
    if (openDropdown) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  const closePanelIfMobile = () => {
    if (isMobileFilterLayout()) setIsFilterOpen(false)
  }

  const handleApply = () => {
    onApply({
      filters: draftFilters,
      ...(showNameSearch ? { nameSearch: draftNameSearch } : {})
    })
    closeDropdowns()
    closePanelIfMobile()
  }

  const handleClear = () => {
    onClear()
    closeDropdowns()
    closePanelIfMobile()
  }

  const renderDropdown = ({ key, label, options, buttonLabelGetter }) => (
    <div className={`filter-dropdown filter-dropdown--${key}`}>
      <span className="filter-dropdown-label">{label}</span>
      <button type="button" className={`filter-dropdown-btn ${openDropdown === key ? 'is-open' : ''}`} onClick={() => toggleDropdown(key)}>
        <span>{buttonLabelGetter ? buttonLabelGetter(draftFilters[key]) : (options.find((opt) => opt.value === draftFilters[key])?.label || 'Cualquiera')}</span>
        <i className="bi bi-chevron-down"></i>
      </button>
      {openDropdown === key && (
        <div className="filter-dropdown-menu">
          {options.map((opt) => (
            <button key={opt.value || 'empty'} type="button" className={`filter-dropdown-item ${draftFilters[key] === opt.value ? 'is-selected' : ''}`} onClick={() => selectOption(key, opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="af-wrapper">
      <button type="button" className="af-toggle" onClick={() => setIsFilterOpen(prev => !prev)}>
        <i className={`bi ${isFilterOpen ? 'bi-x-lg' : 'bi-funnel'}`}></i>
        <span>{isFilterOpen ? 'Cerrar filtros' : 'Filtrar'}</span>
      </button>
      <div className={`af-container ${isFilterOpen ? 'af-container--open' : ''}`}>
      {showNameSearch && (
        <div className="filter-dropdown af-name-search">
          <span className="filter-dropdown-label">Buscar por nombre</span>
          <div className="af-name-input-wrap">
            <i className="bi bi-search af-name-icon"></i>
            <input type="text" value={draftNameSearch} onChange={(e) => setDraftNameSearch(e.target.value)} className="af-name-input" placeholder="Nombre del animal…" />
            {draftNameSearch && (
              <button type="button" className="af-name-clear" onClick={() => setDraftNameSearch('')} aria-label="Limpiar búsqueda">
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>
      )}

      {showLocationFilters && (
        <div className="filter-dropdown af-chenil-search">
          <span className="filter-dropdown-label">Nº de chenil</span>
          <div className="af-name-input-wrap">
            <i className="bi bi-hash af-name-icon"></i>
            <input
              type="number"
              value={draftFilters.chenil ?? ''}
              onChange={(e) => setDraftFilters(prev => ({ ...prev, chenil: e.target.value }))}
              className="af-name-input"
              placeholder="Ej: 12"
              min="0"
            />
            {draftFilters.chenil !== '' && draftFilters.chenil !== undefined && (
              <button type="button" className="af-name-clear" onClick={() => setDraftFilters(prev => ({ ...prev, chenil: '' }))} aria-label="Limpiar filtro">
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>
      )}

      {showGeneralFilters && renderDropdown({ key: 'animal_type', label: 'Tipo de animal', options: ANIMAL_TYPE_OPTIONS })}
      {showGeneralFilters && renderDropdown({ key: 'gender', label: 'Sexo', options: GENDER_OPTIONS })}
      {showGeneralFilters && renderDropdown({ key: 'age', label: 'Edad', options: AGE_OPTIONS })}
      {showGeneralFilters && renderDropdown({ key: 'size', label: 'Tamaño', options: SIZE_OPTIONS })}
      {showLocationFilters && renderDropdown({ key: 'city_hall', label: 'Ayuntamiento', options: cityHallDropdownOptions })}
      {showGeneralFilters && renderDropdown({ key: 'arrival_date', label: 'Fecha de llegada', options: ARRIVAL_OPTIONS, buttonLabelGetter: (value) => ARRIVAL_OPTIONS.find((opt) => opt.value === value)?.buttonLabel || 'Sin orden' })}

      <div className="af-filter-actions">
        <button type="button" className="animals-filter-reset" onClick={handleApply}>Aplicar filtros</button>
        <button type="button" className="animals-filter-reset" onClick={handleClear}>Limpiar filtros</button>
      </div>
      </div>
    </div>
  )
}

export default AnimalFilter
