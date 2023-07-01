import useSWR from 'swr'
import fetcher from './fetcher'

const useFetch = (endpoint, shouldFetch = true) =>
  // TODO permissions - currently user is unauthenticated - do I care? hmm
  // TODO config URL
  useSWR(shouldFetch ? `http://localhost:1337/api/${endpoint}` : null, fetcher)

export default useFetch
