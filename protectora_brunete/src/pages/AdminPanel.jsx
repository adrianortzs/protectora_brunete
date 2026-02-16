import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimalFilter from '../components/AnimalFilter'
import { Pagination, paginate } from '../components/Pagination'
import './pages.css'

const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }

function AdminPanel() {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editAnimal, setEditAnimal] = useState(null)
  const [editForm, setEditForm] = useState({})
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(null)
  const [adopting, setAdopting] = useState(null)
  const [isNewAnimal, setIsNewAnimal] = useState(false)
  const [filters, setFilters] = useState({ animal_type: '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none })
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/hsdkadmin/login', { replace: true })
      } else {
        fetchAnimals()
      }
    })
  }, [navigate])

  const fetchAnimals = async () => {
    try {
      setLoading(true)
      const { data, error: supabaseError } = await supabase.from('animals').select('*').order('arrival_date', { ascending: false })
      if (supabaseError) throw supabaseError
      setAnimals(data || [])
    } catch (err) {
      setError('Error al cargar los animales.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatAge = (ageMonths) => {
    const m = parseInt(ageMonths)
    if (isNaN(m)) return '—'
    if (m < 12) return `${m} ${m === 1 ? 'mes' : 'meses'}`
    const years = Math.floor(m / 12)
    return `${years} ${years === 1 ? 'año' : 'años'}`
  }

  const getFirstImage = (animal) => {
    if (!animal) return null
    const list = Array.isArray(animal.img_url) ? animal.img_url : animal.img_url ? [animal.img_url] : []
    return list.filter(Boolean)[0] || null
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/hsdkadmin/login')
  }

  const updateFilter = (key, value) => { setFilters(prev => ({ ...prev, [key]: value })); setCurrentPage(1) }
  const normalized = (v) => (v && String(v).trim().toLowerCase()) || ''

  const getAgeCategory = (ageMonths) => {
    const m = parseInt(ageMonths)
    if (isNaN(m)) return ''
    if (m < 12) return 'cachorro'
    if (m < 24) return 'joven'
    if (m < 84) return 'adulto'
    return 'senior'
  }

  const filteredAnimals = animals.filter((a) => {
    const typeOk = !filters.animal_type || normalized(a.animal_type) === normalized(filters.animal_type)
    const genderOk = !filters.gender || normalized(a.gender) === normalized(filters.gender)
    const ageOk = !filters.age || getAgeCategory(a.age) === filters.age
    const sizeOk = !filters.size || normalized(a.size) === normalized(filters.size)
    return typeOk && genderOk && ageOk && sizeOk
  })

  const sortedAnimals = [...filteredAnimals].sort((a, b) => {
    if (filters.arrival_date === SORT_ARRIVAL.newest) return (new Date(b.arrival_date || 0) - new Date(a.arrival_date || 0))
    if (filters.arrival_date === SORT_ARRIVAL.oldest) return (new Date(a.arrival_date || 0) - new Date(b.arrival_date || 0))
    return 0
  })

  const { paginated: paginatedAnimals, totalPages, safePage } = paginate(sortedAnimals, currentPage)

  const emptyForm = { name: '', animal_type: '', gender: '', age: '', size: '', description: '', img_url: '', arrival_date: '' }

  const openNew = () => {
    setIsNewAnimal(true)
    setEditAnimal({})
    setEditForm({ ...emptyForm })
  }

  const openEdit = (animal) => {
    setIsNewAnimal(false)
    setEditAnimal(animal)
    setEditForm({
      name: animal.name || '',
      animal_type: animal.animal_type || '',
      gender: animal.gender || '',
      age: animal.age || '',
      size: animal.size || '',
      description: animal.description || '',
      img_url: Array.isArray(animal.img_url) ? animal.img_url.join('\n') : animal.img_url || '',
      arrival_date: animal.arrival_date || ''
    })
  }

  const closeModal = () => {
    if (!saving) {
      setEditAnimal(null)
      setIsNewAnimal(false)
    }
  }

  const handleEditChange = (key, value) => {
    setEditForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    if (!editAnimal) return
    setSaving(true)
    try {
      const imgUrls = editForm.img_url
        .split('\n')
        .map(u => u.trim())
        .filter(Boolean)

      const payload = {
        name: editForm.name.trim(),
        animal_type: editForm.animal_type.trim(),
        gender: editForm.gender.trim(),
        age: editForm.age === '' ? null : parseInt(editForm.age),
        size: editForm.size.trim(),
        description: editForm.description.trim(),
        img_url: imgUrls,
        arrival_date: editForm.arrival_date || null
      }

      if (isNewAnimal) {
        payload.animal_state = 'en adopcion'
        const { data, error: supabaseError } = await supabase
          .from('animals')
          .insert(payload)
          .select()

        if (supabaseError) throw supabaseError
        if (data && data.length > 0) setAnimals(prev => [data[0], ...prev])
      } else {
        const { error: supabaseError } = await supabase
          .from('animals')
          .update(payload)
          .eq('id', editAnimal.id)

        if (supabaseError) throw supabaseError
        setAnimals(prev => prev.map(a => a.id === editAnimal.id ? { ...a, ...payload } : a))
      }

      setEditAnimal(null)
      setIsNewAnimal(false)
    } catch (err) {
      console.error(err)
      alert(isNewAnimal ? 'Error al crear el animal.' : 'Error al guardar los cambios.')
    } finally {
      setSaving(false)
    }
  }

  const handleAdopt = async (animal) => {
    const isAdopted = animal.animal_state === 'adoptado'
    const newState = isAdopted ? 'en adopcion' : 'adoptado'
    setAdopting(animal.id)
    try {
      const { error: supabaseError } = await supabase
        .from('animals')
        .update({ animal_state: newState })
        .eq('id', animal.id)

      if (supabaseError) throw supabaseError
      setAnimals(prev => prev.map(a => a.id === animal.id ? { ...a, animal_state: newState } : a))
    } catch (err) {
      console.error(err)
      alert('Error al actualizar el estado del animal.')
    } finally {
      setAdopting(null)
    }
  }

  const handleDelete = async (animal) => {
    if (!window.confirm(`¿Estás seguro de que quieres eliminar a "${animal.name}"? Esta acción no se puede deshacer.`)) return
    setDeleting(animal.id)
    try {
      const { error: supabaseError } = await supabase
        .from('animals')
        .delete()
        .eq('id', animal.id)

      if (supabaseError) throw supabaseError
      setAnimals(prev => prev.filter(a => a.id !== animal.id))
    } catch (err) {
      console.error(err)
      alert('Error al eliminar el animal.')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="admin-panel">
      <header className="admin-panel-header">
        <div className="admin-panel-header-inner">
          <div className="admin-panel-header-left">
            <i className="bi bi-shield-lock admin-panel-icon"></i>
            <h1 className="admin-panel-title">Panel de Administración</h1>
          </div>
          <button type="button" className="admin-panel-logout" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i> Cerrar sesión
          </button>
        </div>
      </header>

      <main className="admin-panel-main">
        <div className="admin-panel-toolbar">
          <span className="admin-panel-count">
            <i className="bi bi-grid"></i> {animals.length} {animals.length === 1 ? 'animal' : 'animales'} en total
            {sortedAnimals.length !== animals.length && ` · ${sortedAnimals.length} mostrados`}
          </span>
          <button type="button" className="admin-panel-add" onClick={openNew}>
            <i className="bi bi-plus-lg"></i> Añadir animal
          </button>
        </div>

        {loading && (
          <div className="admin-panel-status">
            <span className="admin-login-spinner admin-login-spinner--large"></span>
          </div>
        )}

        {!loading && error && (
          <div className="admin-panel-status admin-panel-status--error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && animals.length === 0 && (
          <div className="admin-panel-status">
            <p>No hay animales registrados.</p>
          </div>
        )}

        {!loading && !error && animals.length > 0 && (
          <AnimalFilter
            filters={filters}
            onFilterChange={updateFilter}
            filterValue={null}
            onClear={() => { setFilters({ animal_type: '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none }); setCurrentPage(1) }}
          />
        )}

        {!loading && !error && animals.length > 0 && sortedAnimals.length === 0 && (
          <div className="admin-panel-status">
            <p>No hay resultados con los filtros seleccionados.</p>
          </div>
        )}

        {!loading && !error && sortedAnimals.length > 0 && (
          <>
            <div className="admin-grid">
              {paginatedAnimals.map((animal) => (
                <article key={animal.id} className="admin-card">
                  <div className="admin-card-image-wrapper">
                    {getFirstImage(animal) ? (
                      <img src={getFirstImage(animal)} alt={animal.name} className="admin-card-image" />
                    ) : (
                      <div className="admin-card-image-placeholder">
                        <i className="bi bi-image"></i>
                      </div>
                    )}
                  </div>
                  <div className="admin-card-body">
                    <div className="admin-card-top">
                      <h2 className="admin-card-name">{animal.name}</h2>
                      {animal.gender && (
                        <span className="admin-card-gender">
                          {animal.gender.toLowerCase() === 'macho' ? (<i className="bi bi-gender-male"></i>) : animal.gender.toLowerCase() === 'hembra' ? (<i className="bi bi-gender-female"></i>) : (animal.gender)}
                        </span>
                      )}
                    </div>
                    <div className="admin-card-info">
                      <span>Edad: {formatAge(animal.age)}</span>
                      <span>Tamaño: {animal.size || '—'}</span>
                      <span>Tipo: {animal.animal_type || '—'}</span>
                    </div>
                    <div className="admin-card-actions">
                      <button type="button" className="admin-card-btn admin-card-btn--edit" onClick={() => openEdit(animal)}>
                        <i className="bi bi-pencil"></i> Editar
                      </button>
                      <button
                        type="button"
                        className={`admin-card-btn ${animal.animal_state === 'adoptado' ? 'admin-card-btn--adopted' : 'admin-card-btn--adopt'}`}
                        onClick={() => handleAdopt(animal)}
                        disabled={adopting === animal.id}
                      >
                        {adopting === animal.id
                          ? <span className="admin-login-spinner admin-login-spinner--small"></span>
                          : animal.animal_state === 'adoptado'
                            ? <><i className="bi bi-heart-fill"></i> Adoptado</>
                            : <><i className="bi bi-heart"></i> Adoptado</>
                        }
                      </button>
                      <button type="button" className="admin-card-btn admin-card-btn--delete" onClick={() => handleDelete(animal)} disabled={deleting === animal.id}>
                        {deleting === animal.id ? <span className="admin-login-spinner admin-login-spinner--small"></span> : <><i className="bi bi-trash"></i> Eliminar</>}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </>
        )}
      </main>

      {editAnimal && (
        <div className="admin-modal-backdrop" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">{isNewAnimal ? 'Añadir animal' : 'Editar animal'}</h2>
              <button type="button" className="admin-modal-close" onClick={closeModal} aria-label="Cerrar">×</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-edit-field">
                <label>Nombre</label>
                <input type="text" value={editForm.name} onChange={(e) => handleEditChange('name', e.target.value)} />
              </div>
              <div className="admin-edit-row">
                <div className="admin-edit-field">
                  <label>Tipo de animal</label>
                  <select value={editForm.animal_type} onChange={(e) => handleEditChange('animal_type', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                  </select>
                </div>
                <div className="admin-edit-field">
                  <label>Sexo</label>
                  <select value={editForm.gender} onChange={(e) => handleEditChange('gender', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>
              </div>
              <div className="admin-edit-row">
                <div className="admin-edit-field">
                  <label>Edad (meses)</label>
                  <input type="number" min="0" value={editForm.age} onChange={(e) => handleEditChange('age', e.target.value)} />
                </div>
                <div className="admin-edit-field">
                  <label>Tamaño</label>
                  <select value={editForm.size} onChange={(e) => handleEditChange('size', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    <option value="toy">Toy</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>
              </div>
              <div className="admin-edit-field">
                <label>Fecha de llegada</label>
                <input type="date" value={editForm.arrival_date} onChange={(e) => handleEditChange('arrival_date', e.target.value)} />
              </div>
              <div className="admin-edit-field">
                <label>Descripción</label>
                <textarea rows="4" value={editForm.description} onChange={(e) => handleEditChange('description', e.target.value)} />
              </div>
              <div className="admin-edit-field">
                <label>URLs de imágenes (una por línea)</label>
                <textarea rows="3" value={editForm.img_url} onChange={(e) => handleEditChange('img_url', e.target.value)} placeholder="https://ejemplo.com/imagen1.jpg&#10;https://ejemplo.com/imagen2.jpg" />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button type="button" className="admin-modal-btn admin-modal-btn--cancel" onClick={closeModal} disabled={saving}>
                Cancelar
              </button>
              <button type="button" className="admin-modal-btn admin-modal-btn--save" onClick={handleSave} disabled={saving}>
                {saving ? <span className="admin-login-spinner admin-login-spinner--small"></span> : isNewAnimal ? 'Crear animal' : 'Guardar cambios'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
