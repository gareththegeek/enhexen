import useSWR from 'swr'
import fetcher from '../hooks/fetcher'

const useFetch = (endpoint, shouldFetch = true) => {
  //TODO permissions - currently user is unauthenticated - do I care? hmm
  const { data } = useSWR(
    shouldFetch
      ? `http://localhost:1337/api/${endpoint}`
      : null,
    fetcher,
  )
  return data
}

export default useFetch
