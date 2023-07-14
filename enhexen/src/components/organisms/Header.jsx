import Nav from '../molecules/Nav'
import TimeControl from '../molecules/TimeControl'
import HexLookup from '../molecules/HexLookup'

const Header = () => (
    <header className="fixed flex flex-col md:flex-row md:justify-between md:items-center gap-4 -m-4 md:-m-8 p-4 md:px-12 w-screen bg-stone-100 drop-shadow-lg z-50">
      <Nav />
      <div className="flex flex-wrap gap-4">
        <HexLookup width="w-16" />
        <TimeControl />
      </div>
    </header>
  )

export default Header
