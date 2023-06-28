import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import DelvePage from '../pages/DelvePage'
import FactionPage from '../pages/FactionPage'
import HexPage from '../pages/HexPage'

const Main = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/:reference?" element={<HexPage />} />
        <Route path="/delve" element={<DelvePage />} />
        <Route path="/faction" element={<FactionPage />} />
      </Routes>
    </main>
  </>
)

export default Main
