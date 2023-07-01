import { DateTime, Duration } from 'luxon'

export const toDateTime = (value) => DateTime.fromISO(value, { zone: 'utc' })
export const toDuration = (value) => Duration.fromISO(value)
