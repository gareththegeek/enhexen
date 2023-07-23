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
    <nav className={mergeClass(rest)}>
      <ul className="flex gap-2 md:gap-4 items-baseline">
        {user && (
          <li>
            <Button className="" onClick={logout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
