import { supabase } from '../lib/supabase'
import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimalFilter from '../components/AnimalFilter'
import { Pagination } from '../components/Pagination'
import { paginate } from '../utils/pagination'
import usePageTitle from '../hooks/usePageTitle'
import './pages.css'

const BUCKET = 'animals'
const SORT_ARRIVAL = { none: '', newest: 'newest', oldest: 'oldest' }
const TOAST_DURATION = 4000
const EMPTY_FORM = { name: '', animal_type: '', gender: '', age: '', size: '', description: '', arrival_date: '' }
const ANIMAL_TYPE_OPTIONS = [{ value: 'perro', label: 'Perro' }, { value: 'gato', label: 'Gato' }]
const GENDER_OPTIONS = [{ value: 'Macho', label: 'Macho' }, { value: 'Hembra', label: 'Hembra' }]
const SIZE_OPTIONS = [{ value: 'pequeño', label: 'Pequeño' }, { value: 'mediano', label: 'Mediano' }, { value: 'grande', label: 'Grande' }]

function normalizeImageList(value) {
  const list = Array.isArray(value) ? value : value ? [value] : []
  return list.filter(Boolean)
}

function getFirstImage(animal) {
  if (!animal) return null
  return normalizeImageList(animal.img_url)[0] || null
}

function validateAnimalForm(form, existingImages, pendingFiles) {
  const errors = {}
  const name = (form.name || '').trim()
  const ageValue = form.age === '' ? '' : Number(form.age)

  if (!name) errors.name = 'El nombre es obligatorio.'
  else if (name.length < 2) errors.name = 'El nombre debe tener al menos 2 caracteres.'
  else if (name.length > 80) errors.name = 'El nombre no puede superar los 80 caracteres.'

  if (!form.animal_type) errors.animal_type = 'Selecciona un tipo de animal.'
  if (!form.gender) errors.gender = 'Selecciona el sexo.'
  if (!form.size) errors.size = 'Selecciona el tamaño.'

  if (form.age !== '') {
    if (!Number.isInteger(ageValue) || ageValue < 0) errors.age = 'La edad debe ser un número mayor o igual que 0.'
    if (ageValue > 400) errors.age = 'La edad parece demasiado alta. Revísala.'
  }

  if ((form.description || '').trim().length > 3500) errors.description = 'La descripción no puede superar los 3500 caracteres.'
  if (!form.arrival_date) errors.arrival_date = 'La fecha de llegada es obligatoria.'
  if (existingImages.length + pendingFiles.length === 0) errors.img_url = 'Añade al menos una imagen.'

  return errors
}

function AdminPanel() {
  usePageTitle('Panel de administración')
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
  const [nameSearch, setNameSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [existingImages, setExistingImages] = useState([])
  const [pendingFiles, setPendingFiles] = useState([])
  const [formErrors, setFormErrors] = useState({})
  const [uploading, setUploading] = useState(false)
  const [toasts, setToasts] = useState([])
  const [confirmDialog, setConfirmDialog] = useState(null)
  const fileInputRef = useRef(null)
  const toastIdRef = useRef(0)
  const confirmResolveRef = useRef(null)
  const navigate = useNavigate()

  const pushToast = useCallback((message, type = 'success') => {
    const id = ++toastIdRef.current
    setToasts(prev => [...prev, { id, message, type, exiting: false }])
    setTimeout(() => setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t)), TOAST_DURATION - 400)
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), TOAST_DURATION)
  }, [])

  const dismissToast = useCallback((id) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t))
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 400)
  }, [])

  const requestConfirm = useCallback((message, description, options = {}) => {
    const {
      confirmLabel = 'Confirmar',
      confirmVariant = 'danger',
      iconClass = 'bi-exclamation-triangle'
    } = options
    return new Promise((resolve) => {
      confirmResolveRef.current = resolve
      setConfirmDialog({ message, description, confirmLabel, confirmVariant, iconClass })
    })
  }, [])

  const resolveConfirm = (accepted) => {
    if (confirmResolveRef.current) confirmResolveRef.current(accepted)
    confirmResolveRef.current = null
    setConfirmDialog(null)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/hsdkadmin/login', { replace: true })
      } else {
        fetchAnimals()
      }
    })
  }, [navigate])

  useEffect(() => {
    if (!editAnimal) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [editAnimal])

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
    if (m < 24) return 'adulto'
    return 'senior'
  }

  const handleNameSearch = (value) => { setNameSearch(value); setCurrentPage(1) }

  const filteredAnimals = useMemo(() => (
    animals.filter((a) => {
      const typeOk = !filters.animal_type || normalized(a.animal_type) === normalized(filters.animal_type)
      const genderOk = !filters.gender || normalized(a.gender) === normalized(filters.gender)
      const ageOk = !filters.age || getAgeCategory(a.age) === filters.age
      const sizeOk = !filters.size || normalized(a.size) === normalized(filters.size)
      const nameOk = !nameSearch || normalized(a.name).includes(normalized(nameSearch))
      return typeOk && genderOk && ageOk && sizeOk && nameOk
    })
  ), [animals, filters, nameSearch])

  const sortedAnimals = useMemo(() => {
    const next = [...filteredAnimals]
    if (filters.arrival_date === SORT_ARRIVAL.newest) return next.sort((a, b) => (new Date(b.arrival_date || 0) - new Date(a.arrival_date || 0)))
    if (filters.arrival_date === SORT_ARRIVAL.oldest) return next.sort((a, b) => (new Date(a.arrival_date || 0) - new Date(b.arrival_date || 0)))
    return next
  }, [filteredAnimals, filters.arrival_date])
  const animalsInAdoption = useMemo(() => animals.filter((animal) => animal.animal_state === 'en adopcion').length, [animals])
  const adoptedAnimals = useMemo(() => animals.filter((animal) => animal.animal_state === 'adoptado').length, [animals])

  const { paginated: paginatedAnimals, totalPages, safePage } = paginate(sortedAnimals, currentPage)

  const pendingPreviews = useMemo(
    () => pendingFiles.map((file, index) => ({ id: `${file.name}-${file.size}-${index}`, file, url: URL.createObjectURL(file) })),
    [pendingFiles]
  )

  useEffect(() => {
    return () => {
      pendingPreviews.forEach((preview) => URL.revokeObjectURL(preview.url))
    }
  }, [pendingPreviews])

  const openNew = () => {
    setIsNewAnimal(true)
    setEditAnimal({})
    setEditForm({ ...EMPTY_FORM })
    setExistingImages([])
    setPendingFiles([])
    setFormErrors({})
  }

  const openEdit = (animal) => {
    setIsNewAnimal(false)
    setEditAnimal(animal)
    setExistingImages(normalizeImageList(animal.img_url))
    setPendingFiles([])
    setFormErrors({})
    setEditForm({
      name: animal.name || '',
      animal_type: animal.animal_type || '',
      gender: animal.gender || '',
      age: animal.age || '',
      size: animal.size || '',
      description: animal.description || '',
      arrival_date: animal.arrival_date || ''
    })
  }

  const closeModal = () => {
    if (!saving && !uploading) {
      setEditAnimal(null)
      setIsNewAnimal(false)
      setPendingFiles([])
      setExistingImages([])
      setFormErrors({})
    }
  }

  const handleFilesSelected = (files) => {
    const valid = Array.from(files).filter(f => f.type.startsWith('image/'))
    if (valid.length === 0) return
    setPendingFiles(prev => [...prev, ...valid])
    setFormErrors(prev => ({ ...prev, img_url: '' }))
  }

  const removeExistingImage = (index) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index))
  }

  const removePendingFile = (index) => {
    setPendingFiles(prev => prev.filter((_, i) => i !== index))
  }

  const uploadFiles = async (files) => {
    const urls = []
    for (const file of files) {
      const ext = file.name.split('.').pop()
      const path = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`
      const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, { cacheControl: '31536000', upsert: false })
      if (uploadError) throw uploadError
      const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(path)
      urls.push(publicUrl)
    }
    return urls
  }

  const handleEditChange = (key, value) => {
    setEditForm(prev => ({ ...prev, [key]: value }))
    setFormErrors(prev => ({ ...prev, [key]: '' }))
  }

  const handleSave = async () => {
    if (!editAnimal) return
    const nextErrors = validateAnimalForm(editForm, existingImages, pendingFiles)
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors)
      pushToast('Revisa los campos obligatorios antes de guardar.', 'error')
      return
    }
    const wasNew = isNewAnimal
    setSaving(true)
    setUploading(pendingFiles.length > 0)
    try {
      let newUrls = []
      if (pendingFiles.length > 0) {
        newUrls = await uploadFiles(pendingFiles)
      }
      setUploading(false)

      const imgUrls = [...existingImages, ...newUrls]

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

      const savedName = editForm.name.trim() || 'Animal'
      setEditAnimal(null)
      setIsNewAnimal(false)
      setPendingFiles([])
      setExistingImages([])
      pushToast(wasNew ? `"${savedName}" creado correctamente` : `"${savedName}" actualizado correctamente`)
    } catch (err) {
      console.error(err)
      setUploading(false)
      pushToast(wasNew ? 'Error al crear el animal.' : 'Error al guardar los cambios.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleAdopt = async (animal) => {
    const isAdopted = animal.animal_state === 'adoptado'
    const newState = isAdopted ? 'en adopcion' : 'adoptado'
    const adoptionDate = newState === 'adoptado' ? new Date().toISOString().split('T')[0] : null
    const confirmed = await requestConfirm(
      isAdopted ? `¿Marcar a "${animal.name}" como en adopción?` : `¿Marcar a "${animal.name}" como adoptado?`,
      isAdopted
        ? 'El animal volverá a mostrarse como disponible para adopción.'
        : 'Se actualizará el estado y se guardará la fecha de adopción.',
      {
        confirmLabel: 'Confirmar',
        confirmVariant: 'primary',
        iconClass: 'bi-heart'
      }
    )
    if (!confirmed) return
    setAdopting(animal.id)
    try {
      const { error: supabaseError } = await supabase
        .from('animals')
        .update({ animal_state: newState, adoption_date: adoptionDate })
        .eq('id', animal.id)

      if (supabaseError) throw supabaseError
      setAnimals(prev => prev.map(a => a.id === animal.id ? { ...a, animal_state: newState, adoption_date: adoptionDate } : a))
      pushToast(
        newState === 'adoptado'
          ? `"${animal.name}" marcado como adoptado`
          : `"${animal.name}" marcado como en adopción`
      )
    } catch (err) {
      console.error(err)
      pushToast('Error al actualizar el estado del animal.', 'error')
    } finally {
      setAdopting(null)
    }
  }

  const handleDelete = async (animal) => {
    const confirmed = await requestConfirm(
      `¿Eliminar a "${animal.name}"?`,
      'Esta acción no se puede deshacer. Se eliminará toda la información del animal.',
      {
        confirmLabel: 'Eliminar',
        confirmVariant: 'danger',
        iconClass: 'bi-exclamation-triangle'
      }
    )
    if (!confirmed) return
    setDeleting(animal.id)
    try {
      const { error: supabaseError } = await supabase
        .from('animals')
        .delete()
        .eq('id', animal.id)

      if (supabaseError) throw supabaseError
      setAnimals(prev => prev.filter(a => a.id !== animal.id))
      pushToast(`"${animal.name}" eliminado correctamente`)
    } catch (err) {
      console.error(err)
      pushToast('Error al eliminar el animal.', 'error')
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
            <i className="bi bi-grid"></i> {animals.length} {animals.length === 1 ? 'animal' : 'animales'} en total - {animalsInAdoption} en adopción - {adoptedAnimals} adoptados
            {sortedAnimals.length !== animals.length && ` - ${sortedAnimals.length} mostrados`}
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
            onClear={() => { setFilters({ animal_type: '', gender: '', age: '', size: '', arrival_date: SORT_ARRIVAL.none }); setNameSearch(''); setCurrentPage(1) }}
            showNameSearch
            nameSearch={nameSearch}
            onNameSearchChange={handleNameSearch}
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
              {paginatedAnimals.map((animal) => {
                const firstImage = getFirstImage(animal)
                return (
                  <article key={animal.id} className="admin-card">
                    <div className="admin-card-image-wrapper">
                      {firstImage ? (
                        <img src={firstImage} alt={animal.name} className="admin-card-image" loading="lazy" decoding="async" />
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
                )
              })}
            </div>

            <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </>
        )}
      </main>

      {toasts.length > 0 && (
        <div className="admin-toast-container" aria-live="polite">
          {toasts.map((t) => (
            <div key={t.id} className={`admin-toast admin-toast--${t.type}${t.exiting ? ' admin-toast--exit' : ''}`}>
              <i className={`bi ${t.type === 'error' ? 'bi-exclamation-circle' : 'bi-check-circle'}`}></i>
              <span className="admin-toast-msg">{t.message}</span>
              <button type="button" className="admin-toast-close" onClick={() => dismissToast(t.id)} aria-label="Cerrar">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          ))}
        </div>
      )}

      {confirmDialog && (
        <div className="admin-confirm-backdrop" onClick={() => resolveConfirm(false)}>
          <div className="admin-confirm" onClick={(e) => e.stopPropagation()} role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby={confirmDialog.description ? 'confirm-desc' : undefined}>
            <div className={`admin-confirm-icon admin-confirm-icon--${confirmDialog.confirmVariant}`}>
              <i className={`bi ${confirmDialog.iconClass}`}></i>
            </div>
            <h3 id="confirm-title" className="admin-confirm-title">{confirmDialog.message}</h3>
            {confirmDialog.description && <p id="confirm-desc" className="admin-confirm-desc">{confirmDialog.description}</p>}
            <div className="admin-confirm-actions">
              <button type="button" className="admin-confirm-btn admin-confirm-btn--cancel" onClick={() => resolveConfirm(false)}>Cancelar</button>
              <button type="button" className={`admin-confirm-btn admin-confirm-btn--${confirmDialog.confirmVariant}`} onClick={() => resolveConfirm(true)}>
                {confirmDialog.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}

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
                {formErrors.name && <p className="admin-edit-error">{formErrors.name}</p>}
              </div>
              <div className="admin-edit-row">
                <div className="admin-edit-field">
                  <label>Tipo de animal</label>
                  <select value={editForm.animal_type} onChange={(e) => handleEditChange('animal_type', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    {ANIMAL_TYPE_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  {formErrors.animal_type && <p className="admin-edit-error">{formErrors.animal_type}</p>}
                </div>
                <div className="admin-edit-field">
                  <label>Sexo</label>
                  <select value={editForm.gender} onChange={(e) => handleEditChange('gender', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    {GENDER_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  {formErrors.gender && <p className="admin-edit-error">{formErrors.gender}</p>}
                </div>
              </div>
              <div className="admin-edit-row">
                <div className="admin-edit-field">
                  <label>Edad (meses)</label>
                  <input type="number" min="0" value={editForm.age} onChange={(e) => handleEditChange('age', e.target.value)} />
                  {formErrors.age && <p className="admin-edit-error">{formErrors.age}</p>}
                </div>
                <div className="admin-edit-field">
                  <label>Tamaño</label>
                  <select value={editForm.size} onChange={(e) => handleEditChange('size', e.target.value)}>
                    <option value="">— Seleccionar —</option>
                    {SIZE_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  {formErrors.size && <p className="admin-edit-error">{formErrors.size}</p>}
                </div>
              </div>
              <div className="admin-edit-field">
                <label>Fecha de llegada</label>
                <input type="date" value={editForm.arrival_date} onChange={(e) => handleEditChange('arrival_date', e.target.value)} />
                {formErrors.arrival_date && <p className="admin-edit-error">{formErrors.arrival_date}</p>}
              </div>
              <div className="admin-edit-field">
                <label>Descripción</label>
                <textarea rows="4" value={editForm.description} onChange={(e) => handleEditChange('description', e.target.value)} />
                {formErrors.description && <p className="admin-edit-error">{formErrors.description}</p>}
              </div>
              <div className="admin-edit-field">
                <label>Imágenes</label>
                {(existingImages.length > 0 || pendingFiles.length > 0) && (
                  <div className="admin-img-grid">
                    {existingImages.map((url, i) => (
                      <div key={`existing-${i}`} className="admin-img-thumb">
                        <img src={url} alt={`Imagen ${i + 1}`} loading="lazy" decoding="async" />
                        <button type="button" className="admin-img-remove" onClick={() => removeExistingImage(i)} aria-label="Eliminar imagen">
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>
                    ))}
                    {pendingPreviews.map((preview, i) => (
                      <div key={preview.id} className="admin-img-thumb admin-img-thumb--pending">
                        <img src={preview.url} alt={preview.file.name} loading="lazy" decoding="async" />
                        <span className="admin-img-badge">Nueva</span>
                        <button type="button" className="admin-img-remove" onClick={() => removePendingFile(i)} aria-label="Eliminar imagen">
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {formErrors.img_url && <p className="admin-edit-error">{formErrors.img_url}</p>}
                <div
                  className="admin-img-dropzone"
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click() } }}
                  onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('admin-img-dropzone--active') }}
                  onDragLeave={(e) => { e.currentTarget.classList.remove('admin-img-dropzone--active') }}
                  onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove('admin-img-dropzone--active'); handleFilesSelected(e.dataTransfer.files) }}
                >
                  <i className="bi bi-cloud-arrow-up"></i>
                  <span>Arrastra imágenes aquí o haz clic para seleccionar</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="admin-img-input-hidden"
                    onChange={(e) => { handleFilesSelected(e.target.files); e.target.value = '' }}
                  />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button type="button" className="admin-modal-btn admin-modal-btn--cancel" onClick={closeModal} disabled={saving}>
                Cancelar
              </button>
              <button type="button" className="admin-modal-btn admin-modal-btn--save" onClick={handleSave} disabled={saving}>
                {saving
                  ? uploading
                    ? <><span className="admin-login-spinner admin-login-spinner--small"></span> Subiendo imágenes…</>
                    : <><span className="admin-login-spinner admin-login-spinner--small"></span> Guardando…</>
                  : isNewAnimal ? 'Crear animal' : 'Guardar cambios'
                }
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
