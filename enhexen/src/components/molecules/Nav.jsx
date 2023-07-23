import useCurrentPath from '../../hooks/useCurrentPath'
import Link from '../atoms/Link'
import { mergeClass } from '../mergeClass'

const Nav = ({ ...rest }) => {
  const route = useCurrentPath()

  return (
    <nav aria-label="Main" className={mergeClass(rest)}>
      <ul className="flex gap-2 md:gap-4 items-baseline">
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'hexes' ? 'selected-nav-link' : 'text-grey-500'
            }`}
            to=""
          >
            Hex
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'settlement' ? 'selected-nav-link' : 'text-grey-500'
            }`}
            to="/settlements"
          >
            Settlements
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'delve' ? 'selected-nav-link' : 'text-grey-500'
            }`}
            to="/delve"
          >
            Delve
          </Link>
        </li>
        <li>
          <Link
            className={`no-underline py-2 ${
              route === 'factions' ? 'selected-nav-link' : 'text-grey-500'
            }`}
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
