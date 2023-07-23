import Nav from '../molecules/Nav'
import User from '../molecules/User'
import useClock from '../../hooks/clock'
import Clock from '../atoms/Clock'
import { toDateTime } from '../../helpers/dates'

const Header = () => {
  const { now } = useClock(true)
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
      <User />
      <Nav />
      <Clock value={toDateTime(now)} />
    </header>
  )
}

export default Header
