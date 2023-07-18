import useFetch from '../useFetch'
import usePut from '../usePut'

const useClock = (shouldFetch) => {
  const { data, mutate } = useFetch(`global`, shouldFetch)
  const put = usePut()
  return {
    now: data?.now,
    mutateClock: mutate,
    putClock: (now) => put(`global`, { now }),
  }
}

export default useClock
