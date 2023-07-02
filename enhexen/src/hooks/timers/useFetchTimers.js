import useFetch from '../useFetch'

const useFetchTimers = () => {
  const { data, mutate } = useFetch(`timers?sort[0]=due:asc`)
  return { timers: data, mutateTimers: mutate }
}

export default useFetchTimers
