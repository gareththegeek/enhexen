import useFetch from './useFetch'

const useFetchClock = (shouldFetch) => {
  const result = useFetch(`global`, shouldFetch)
  return result?.now
}

export default useFetchClock
