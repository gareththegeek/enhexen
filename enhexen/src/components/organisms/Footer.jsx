import Nav from '../molecules/Nav'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const Footer = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)')

  if (isMdScreen) {
    return <></>
  }

  return (
    <footer
      className={`
      fixed w-screen bottom-0
      flex flex-row justify-center
      py-4
      bg-grey-800
      border-t-white
      border-t-2
      text-white
      z-50`}
    >
      <Nav />
    </footer>
  )
}

export default Footer
