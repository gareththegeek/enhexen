import useCurrentPath from '../../hooks/useCurrentPath'
import Link from '../atoms/Link'

const Nav = () => {
  const route = useCurrentPath()

  return (
    <nav aria-label="Main">
      <ul className="flex gap-2">
        <li>
          <Link
            className={`block w-10 ${route === 'hexes' && 'selected-nav-link'}`}
            to=""
          >
            Hex
          </Link>
        </li>
        <li>
          <Link
            className={`block w-24 ${route === 'settlement' && 'selected-nav-link'}`}
            to="/settlements"
          >
            Settlements
          </Link>
        </li>
        <li>
          <Link
            className={`block w-14 ${route === 'delve' && 'selected-nav-link'}`}
            to="/delve"
          >
            Delve
          </Link>
        </li>
        <li>
          <Link
            className={`block w-12 ${route === 'factions' && 'selected-nav-link'}`}
            to="/factions"
          >
            Factions
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
