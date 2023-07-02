import useFetch from '../useFetch'

const useFetchClock = (shouldFetch) => {
  const { data, mutate } = useFetch(`global`, shouldFetch)
  return { now: data?.now, mutateClock: mutate }
}

export default useFetchClock
