import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import parseResponse from './parser'

const post = (endpoint, entity, jwt) =>
  fetch(`${import.meta.env.VITE_API_BASE}/${endpoint}`, {
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

  return async (endpoint, entity) => {
    const response = await post(endpoint, entity, user?.jwt)
    return parseResponse(response)?.data
  }
}

export default usePost
