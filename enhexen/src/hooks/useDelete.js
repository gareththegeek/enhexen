import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const del = (endpoint, jwt) =>
  fetch(`http://localhost:1337/api/${endpoint}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  })

const useDelete = () => {
  const { user } = useContext(UserContext)
  if (!user?.jwt) {
    return
  }

  return (endpoint) => del(endpoint, user?.jwt)
}

export default useDelete
