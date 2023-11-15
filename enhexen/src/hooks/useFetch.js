import useSWR from 'swr'
import fetcher from './fetcher'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const useFetch = (endpoint, shouldFetch = true, immutable = false) => {
  const { user } = useContext(UserContext)
  const { data, mutate } = useSWR(
    shouldFetch ? `${import.meta.env.VITE_API_BASE}/${endpoint}` : null,
    fetcher(user?.jwt),
    immutable
      ? {
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }
      : {}
  )
  // Apparently useSWR initially returns a successful cors
  // request as the data when you mutate the endpoint!?
  if (data?.type === 'cors') {
    return {}
  }
  return { data: data?.data, meta: data?.meta, mutate }
}

export const useFetchImmutable = (endpoint, shouldFetch = true) =>
  useFetch(endpoint, shouldFetch, true)

export default useFetch
