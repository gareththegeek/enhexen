import { useLocation } from 'react-router-dom'
import { routes } from '../templates/Authenticated'

const useCurrentPath = () => {
  const { pathname } = useLocation()
  return routes
    .map(({ name, route }) => ({ name, start: route.split(':')[0] }))
    .reverse()
    .find(({ start }) => pathname.startsWith(start))?.name
}

export default useCurrentPath
