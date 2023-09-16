import { useContext, useEffect } from 'react'
import Nav from '../molecules/Nav'
import User from '../molecules/User'
import Clock from '../atoms/Clock'
import { toDateTime } from '../../helpers/dates'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ClockContext } from '../../contexts/ClockContext'
import useClock from '../../hooks/clock'

const Header = () => {
  const { now: local, setNow } = useContext(ClockContext)
  const { now: remote } = useClock(!local)
  const isMdScreen = useMediaQuery('(min-width: 768px)')
  useEffect(() => {
    if (!local) {
      setNow(remote)
    }
  }, [local, remote, setNow])
  const now = local || remote

  if (!isMdScreen) {
    return (
      <header
        className={`
      fixed w-screen
      flex flex-row justify-between
      p-4
      bg-grey-100
      drop-shadow-lg
      z-50`}
      >
        <User />
        <Clock value={toDateTime(now)} />
      </header>
    )
  }

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
