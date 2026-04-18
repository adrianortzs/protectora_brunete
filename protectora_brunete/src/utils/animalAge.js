/**
 * Edad a partir de fecha de nacimiento (YYYY-MM-DD) o, en registros antiguos, del campo `age` en meses.
 */

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

export function parseLocalBirthDate(isoDate) {
  if (isoDate == null) return null
  const head = typeof isoDate === 'string' ? isoDate.trim().slice(0, 10) : ''
  if (!head) return null
  const m = ISO_DATE.exec(head)
  if (!m) return null
  const y = parseInt(m[1], 10)
  const mo = parseInt(m[2], 10) - 1
  const d = parseInt(m[3], 10)
  const dt = new Date(y, mo, d)
  if (dt.getFullYear() !== y || dt.getMonth() !== mo || dt.getDate() !== d) return null
  return dt
}

function startOfLocalDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function fullMonthsBetweenBirthAnd(refDay, birthDay) {
  let months = (refDay.getFullYear() - birthDay.getFullYear()) * 12
  months += refDay.getMonth() - birthDay.getMonth()
  if (refDay.getDate() < birthDay.getDate()) months -= 1
  return months
}

export function calendarDaysBetweenBirthAnd(refDay, birthDay) {
  const a = startOfLocalDay(birthDay).getTime()
  const b = startOfLocalDay(refDay).getTime()
  return Math.floor((b - a) / 86400000)
}

export function formatLegacyAgeMonths(ageMonths) {
  const m = typeof ageMonths === 'number' && Number.isFinite(ageMonths) ? ageMonths : parseInt(ageMonths, 10)
  if (!Number.isFinite(m) || m < 0) return '—'
  if (m < 12) return `${m} ${m === 1 ? 'mes' : 'meses'}`
  const years = Math.floor(m / 12)
  return `${years} ${years === 1 ? 'año' : 'años'}`
}

export function formatAgeFromBirthDate(birthDateStr, asOf = new Date()) {
  const birth = parseLocalBirthDate(birthDateStr)
  if (!birth) return '—'
  const ref = startOfLocalDay(asOf)
  if (ref < birth) return '—'
  const months = fullMonthsBetweenBirthAnd(ref, birth)
  if (months >= 12) {
    const years = Math.floor(months / 12)
    return `${years} ${years === 1 ? 'año' : 'años'}`
  }
  if (months >= 1) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`
  }
  const days = Math.max(0, calendarDaysBetweenBirthAnd(ref, birth))
  return `${days} ${days === 1 ? 'día' : 'días'}`
}

export function formatAnimalAge(animal, asOf = new Date()) {
  if (animal?.birth_date) return formatAgeFromBirthDate(animal.birth_date, asOf)
  return formatLegacyAgeMonths(animal?.age)
}

export function animalAgeInFullMonths(animal, asOf = new Date()) {
  if (animal?.birth_date) {
    const birth = parseLocalBirthDate(animal.birth_date)
    if (!birth) return NaN
    const ref = startOfLocalDay(asOf)
    return fullMonthsBetweenBirthAnd(ref, birth)
  }
  const legacy = typeof animal?.age === 'number' && Number.isFinite(animal.age) ? animal.age : parseInt(animal?.age, 10)
  return Number.isFinite(legacy) ? legacy : NaN
}

export function animalAgeCategory(animal, { puppyMaxExclusive, adultMaxExclusive }, asOf = new Date()) {
  const m = animalAgeInFullMonths(animal, asOf)
  if (!Number.isFinite(m) || m < 0) return ''
  if (m < puppyMaxExclusive) return 'cachorro'
  if (m < adultMaxExclusive) return 'adulto'
  return 'senior'
}

/** Umbrales usados en el panel (filtros internos). */
export const AGE_CATEGORY_THRESHOLDS_ADMIN = { puppyMaxExclusive: 12, adultMaxExclusive: 24 }

/** Umbrales usados en la web pública (filtros de adopción). */
export const AGE_CATEGORY_THRESHOLDS_PUBLIC = { puppyMaxExclusive: 14, adultMaxExclusive: 84 }

const MAX_AGE_YEARS = 40

/** @returns {string | null} mensaje de error en español, o null si es válida */
export function validateBirthDateInput(isoDate, asOf = new Date()) {
  if (!isoDate || String(isoDate).trim() === '') return 'La fecha de nacimiento es obligatoria.'
  const birth = parseLocalBirthDate(String(isoDate).trim())
  if (!birth) return 'Introduce una fecha válida.'
  const ref = startOfLocalDay(asOf)
  if (birth > ref) return 'La fecha de nacimiento no puede ser futura.'
  const oldest = new Date(ref)
  oldest.setFullYear(oldest.getFullYear() - MAX_AGE_YEARS)
  if (birth < oldest) return `La fecha no puede ser anterior a hace ${MAX_AGE_YEARS} años.`
  return null
}
