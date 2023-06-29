import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import DelvePage from '../pages/DelvePage'
import FactionPage from '../pages/FactionPage'
import FactionSelectPage from '../pages/FactionSelectPage'
import HexPage from '../pages/HexPage'

const Main = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/:reference?" element={<HexPage />} />
        <Route path="/delve" element={<DelvePage />} />
        <Route path="/factions" element={<FactionSelectPage />} />
        <Route path="/factions/:id" element={<FactionPage />} />
      </Routes>
    </main>
  </>
)

export default Main
