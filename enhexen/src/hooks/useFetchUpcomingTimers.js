import useFetch from './useFetch'

const useFetchUpcomingTimers = (now) => {
  const result = useFetch(`timers?filters[due][$gt]=${now?.toISO()}`, !!now)
  if (result && !Array.isArray(result)) {
    return [result]
  }
  return result
}

export default useFetchUpcomingTimers
