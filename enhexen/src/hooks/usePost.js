import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const post = (endpoint, entity, jwt) =>
  fetch(`http://localhost:1337/api/${endpoint}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: entity }),
  })

const usePost = () => {
  const { user } = useContext(UserContext)
  if (!user?.jwt) {
    return
  }

  return (endpoint, entity) => post(endpoint, entity, user?.jwt)
}

export default usePost
