import Nav from '../molecules/Nav'
import TimeControl from '../molecules/TimeControl'
import HexLookup from '../molecules/HexLookup'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Header = () => {
  const { user } = useContext(UserContext)
  return (
    <header
      className={`
      fixed 
      flex flex-col md:flex-row
      md:justify-between items-center
      gap-4 p-2 md:px-12
      w-screen min-h-[4.2rem]
      bg-grey-100 drop-shadow-lg z-50`}
    >
      {user && (
        <>
          <Nav />
          <div className="flex flex-wrap justify-center gap-4">
            <HexLookup labelWidth="w-28" />
            <TimeControl />
          </div>
        </>
      )}
    </header>
  )
}

export default Header
