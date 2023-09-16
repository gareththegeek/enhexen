import { DateTime, Duration } from 'luxon'

export const toDateTime = (value) => DateTime.fromISO(value, { zone: 'utc' })
export const toDuration = (value) => Duration.fromISO(value)
export const formatDate = (value) => {
  if (value?.invalid) {
    return ''
  }
  return value?.toLocaleString({
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
