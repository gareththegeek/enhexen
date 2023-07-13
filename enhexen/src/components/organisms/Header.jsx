import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { HexContext } from '../../contexts/HexContext'
import Nav from '../molecules/Nav'
import TimeControl from '../molecules/TimeControl'
import HexLookup from '../molecules/HexLookup'

const Header = () => {
  const navigate = useNavigate()
  const { reference, setReference } = useContext(HexContext)

  const handleSearch = (nextReference) => {
    setReference(nextReference)
    navigate(`/${nextReference}`)
  }

  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center px-2 gap-4">
      <Nav />
      <div className="flex flex-wrap gap-4">
        <HexLookup onSearch={handleSearch} value={reference} />
        <TimeControl />
      </div>
    </header>
  )
}

export default Header
