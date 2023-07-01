import useFetch from './useFetch'

const useFetchElapsedTimers = (now) => {
  const result = useFetch(`timers?filters[due][$lte]=${now?.toISO()}`, !!now)
  if (result && !Array.isArray(result)) {
    return [result]
  }
  return result
}

export default useFetchElapsedTimers
