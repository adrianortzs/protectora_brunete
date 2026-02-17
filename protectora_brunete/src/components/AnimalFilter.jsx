import { useState, useEffect } from 'react'
import './components.css'

const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }

const AGE_OPTIONS = [ { value: 'cachorro', label: 'Cachorro' }, { value: 'adulto', label: 'Adulto' }, { value: 'senior', label: 'Senior' } ]

const SIZE_OPTIONS = [ { value: 'pequeño', label: 'Pequeño' }, { value: 'mediano', label: 'Mediano' }, { value: 'grande', label: 'Grande' } ]

function AnimalFilter({ filters, onFilterChange, filterValue, onClear }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const toggleDropdown = (name) => { setOpenDropdown(prev => prev === name ? null : name) }
  const closeDropdowns = () => { setOpenDropdown(null) }
  const selectOption = (key, value) => { onFilterChange(key, value); closeDropdowns() }

  const hasActiveFilters = filters.animal_type || filters.gender || filters.age || filters.size || filters.arrival_date

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.filter-dropdown')) closeDropdowns()
    }
    if (openDropdown) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  const handleClear = () => {
    onClear()
    closeDropdowns()
  }

  return (
    <div className="af-wrapper">
      <button type="button" className="af-toggle" onClick={() => setIsFilterOpen(prev => !prev)}>
        <i className={`bi ${isFilterOpen ? 'bi-x-lg' : 'bi-funnel'}`}></i>
        <span>{isFilterOpen ? 'Cerrar filtros' : 'Filtrar'}</span>
        {hasActiveFilters && !isFilterOpen && <span className="af-toggle-badge"></span>}
      </button>
      <div className={`af-container ${isFilterOpen ? 'af-container--open' : ''}`}>
      <div className="filter-dropdown">
        <span className="filter-dropdown-label">Tipo de animal</span>
        <button type="button" className={`filter-dropdown-btn ${openDropdown === 'animal_type' ? 'is-open' : ''}`} onClick={() => toggleDropdown('animal_type')}>
          <span>{filters.animal_type === 'perro' ? 'Perro' : filters.animal_type === 'gato' ? 'Gato' : 'Cualquiera'}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        {openDropdown === 'animal_type' && (
          <div className="filter-dropdown-menu">
            <button type="button" className={`filter-dropdown-item ${filters.animal_type === '' ? 'is-selected' : ''}`} onClick={() => selectOption('animal_type', '')}>Cualquiera</button>
            <button type="button" className={`filter-dropdown-item ${filters.animal_type === 'perro' ? 'is-selected' : ''}`} onClick={() => selectOption('animal_type', 'perro')}>Perro</button>
            <button type="button" className={`filter-dropdown-item ${filters.animal_type === 'gato' ? 'is-selected' : ''}`} onClick={() => selectOption('animal_type', 'gato')}>Gato</button>
          </div>
        )}
      </div>

      <div className="filter-dropdown">
        <span className="filter-dropdown-label">Sexo</span>
        <button type="button" className={`filter-dropdown-btn ${openDropdown === 'gender' ? 'is-open' : ''}`} onClick={() => toggleDropdown('gender')}>
          <span>{filters.gender === 'macho' ? 'Macho' : filters.gender === 'hembra' ? 'Hembra' : 'Cualquiera'}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        {openDropdown === 'gender' && (
          <div className="filter-dropdown-menu">
            <button type="button" className={`filter-dropdown-item ${filters.gender === '' ? 'is-selected' : ''}`} onClick={() => selectOption('gender', '')}>Cualquiera</button>
            <button type="button" className={`filter-dropdown-item ${filters.gender === 'macho' ? 'is-selected' : ''}`} onClick={() => selectOption('gender', 'macho')}>Macho</button>
            <button type="button" className={`filter-dropdown-item ${filters.gender === 'hembra' ? 'is-selected' : ''}`} onClick={() => selectOption('gender', 'hembra')}>Hembra</button>
          </div>
        )}
      </div>

      <div className="filter-dropdown">
        <span className="filter-dropdown-label">Edad</span>
        <button type="button" className={`filter-dropdown-btn ${openDropdown === 'age' ? 'is-open' : ''}`} onClick={() => toggleDropdown('age')}>
          <span>{AGE_OPTIONS.find(opt => opt.value === filters.age)?.label || 'Cualquiera'}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        {openDropdown === 'age' && (
          <div className="filter-dropdown-menu">
            <button type="button" className={`filter-dropdown-item ${filters.age === '' ? 'is-selected' : ''}`} onClick={() => selectOption('age', '')}>Cualquiera</button>
            {AGE_OPTIONS.map((opt) => (
              <button key={opt.value} type="button" className={`filter-dropdown-item ${filters.age === opt.value ? 'is-selected' : ''}`} onClick={() => selectOption('age', opt.value)}>{opt.label}</button>
            ))}
          </div>
        )}
      </div>

      <div className="filter-dropdown">
        <span className="filter-dropdown-label">Tamaño</span>
        <button type="button" className={`filter-dropdown-btn ${openDropdown === 'size' ? 'is-open' : ''}`} onClick={() => toggleDropdown('size')}>
          <span>{SIZE_OPTIONS.find(opt => opt.value === filters.size)?.label || 'Cualquiera'}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        {openDropdown === 'size' && (
          <div className="filter-dropdown-menu">
            <button type="button" className={`filter-dropdown-item ${filters.size === '' ? 'is-selected' : ''}`} onClick={() => selectOption('size', '')}>Cualquiera</button>
            {SIZE_OPTIONS.map((opt) => (
              <button key={opt.value} type="button" className={`filter-dropdown-item ${filters.size === opt.value ? 'is-selected' : ''}`} onClick={() => selectOption('size', opt.value)}>{opt.label}</button>
            ))}
          </div>
        )}
      </div>

      <div className="filter-dropdown">
        <span className="filter-dropdown-label">Fecha de llegada</span>
        <button type="button" className={`filter-dropdown-btn ${openDropdown === 'arrival_date' ? 'is-open' : ''}`} onClick={() => toggleDropdown('arrival_date')}>
          <span>{filters.arrival_date === SORT_ARRIVAL.oldest ? 'Más antiguos' : filters.arrival_date === SORT_ARRIVAL.newest ? 'Más recientes' : 'Sin orden'}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        {openDropdown === 'arrival_date' && (
          <div className="filter-dropdown-menu">
            <button type="button" className={`filter-dropdown-item ${filters.arrival_date === '' ? 'is-selected' : ''}`} onClick={() => selectOption('arrival_date', '')}>Sin orden</button>
            <button type="button" className={`filter-dropdown-item ${filters.arrival_date === SORT_ARRIVAL.oldest ? 'is-selected' : ''}`} onClick={() => selectOption('arrival_date', SORT_ARRIVAL.oldest)}>Más antiguos primero</button>
            <button type="button" className={`filter-dropdown-item ${filters.arrival_date === SORT_ARRIVAL.newest ? 'is-selected' : ''}`} onClick={() => selectOption('arrival_date', SORT_ARRIVAL.newest)}>Más recientes primero</button>
          </div>
        )}
      </div>

      <button type="button" className="animals-filter-reset" onClick={handleClear}>Limpiar filtros</button>
      </div>
    </div>
  )
}

export default AnimalFilter
