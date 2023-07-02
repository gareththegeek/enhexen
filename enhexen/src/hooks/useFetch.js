import useSWR from 'swr'
import fetcher from './fetcher'

const useFetch = (endpoint, shouldFetch = true) => {
  // TODO permissions - currently user is unauthenticated - do I care? hmm
  // TODO config URL
  const { data, mutate } = useSWR(
    shouldFetch ? `http://localhost:1337/api/${endpoint}` : null,
    fetcher
  )
  // Apparently useSWR initially returns a successful cors
  // request as the data when you mutate the endpoint!?
  if (data?.type === 'cors') {
    return {}
  }
  return { data, mutate }
}

export default useFetch
