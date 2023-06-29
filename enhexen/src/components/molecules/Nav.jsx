import Link from '../atoms/Link'

const Nav = () => (
  <nav aria-label="Main">
    <ul>
      <li>
        <Link to="">Hex</Link>
      </li>
      <li>
        <Link to="/delve">Delve</Link>
      </li>
      <li>
        <Link to="/factions">Factions</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
