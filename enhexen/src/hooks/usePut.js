import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const put = (endpoint, entity, jwt) =>
  fetch(`${import.meta.env.VITE_API_BASE}/${endpoint}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: entity }),
  })

const usePut = () => {
  const { user } = useContext(UserContext)
  if (!user?.jwt) {
    return
  }

  return (endpoint, entity) => put(endpoint, entity, user?.jwt)
}

export default usePut
