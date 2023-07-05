import LI from '../atoms/LI'
import Link from '../atoms/Link'
import UL from '../atoms/UL'

const Nav = () => (
  <nav aria-label="Main">
    <UL className="flex gap-2">
      <LI>
        <Link to="">Hex</Link>
      </LI>
      <LI>
        <Link to="/settlements">Settlements</Link>
      </LI>
      <LI>
        <Link to="/delve">Delve</Link>
      </LI>
      <LI>
        <Link to="/factions">Factions</Link>
      </LI>
    </UL>
  </nav>
)

export default Nav
