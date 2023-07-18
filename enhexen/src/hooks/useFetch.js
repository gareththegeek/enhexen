import useSWR from 'swr'
import fetcher from './fetcher'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const useFetch = (endpoint, shouldFetch = true) => {
  const { user } = useContext(UserContext)
  // TODO config URL
  const { data, mutate } = useSWR(
    shouldFetch ? `http://localhost:1337/api/${endpoint}` : null,
    fetcher(user?.jwt)
  )
  // Apparently useSWR initially returns a successful cors
  // request as the data when you mutate the endpoint!?
  if (data?.type === 'cors') {
    return {}
  }
  return { data, mutate }
}

export default useFetch
