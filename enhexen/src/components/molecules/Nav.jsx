import { useContext } from 'react'
import useCurrentPath from '../../hooks/useCurrentPath'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import { mergeClass } from '../mergeClass'
import { UserContext } from '../../contexts/UserContext'

const Nav = ({ ...rest }) => {
  const route = useCurrentPath()
  const { user, logout } = useContext(UserContext)

  return (
    <nav aria-label="Main" className={mergeClass(rest)}>
      <ul className="flex gap-2 md:gap-4">
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'hexes' && 'selected-nav-link'
            }`}
            to=""
          >
            Hex
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'settlement' && 'selected-nav-link'
            }`}
            to="/settlements"
          >
            Settlements
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'delve' && 'selected-nav-link'
            }`}
            to="/delve"
          >
            Delve
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'factions' && 'selected-nav-link'
            }`}
            to="/factions"
          >
            Factions
          </Link>
        </li>
        {user && (
          <li>
            <Button className="ml-4" onClick={logout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
