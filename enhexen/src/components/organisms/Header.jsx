import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { HexContext } from '../../contexts/HexContext'
import Nav from '../molecules/Nav'
import HexLookup from './HexLookup'

const Header = () => {
  const navigate = useNavigate()
  const { reference, setReference } = useContext(HexContext)

  const handleSearch = (nextReference) => {
    setReference(nextReference)
    navigate(`/${nextReference}`)
  }

  return (
    <header>
      <Nav />
      <HexLookup onSearch={handleSearch} value={reference} />
    </header>
  )
}

export default Header
