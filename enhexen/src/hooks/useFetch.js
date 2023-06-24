import useSWR from 'swr'
import fetcher from '../hooks/fetcher'

const useFetch = (endpoint, shouldFetch = true) => {
  const { data } = useSWR(
    shouldFetch
      ? `http://localhost:1337/api/${endpoint}`
      : null,
    fetcher,
  )
  return data
}

export default useFetch
