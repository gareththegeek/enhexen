import useSWR from 'swr'
import fetcher from './fetcher'

const useFetchTimers = () => {
  const { data, mutate } = useSWR(`http://localhost:1337/api/timers`, fetcher)
  if (data && !Array.isArray(data)) {
    return { data: [data], mutate }
  }
  return { timers: data, mutateTimers: mutate }
}

export default useFetchTimers
