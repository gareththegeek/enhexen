import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import HexPage from '../pages/HexPage'
import AdventurePage from '../pages/AdventurePage'

const Main = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/:reference?" element={<HexPage />} />
        <Route path="/adventures/:id?" element={<AdventurePage />} />
      </Routes>
    </main>
  </>
)

export default Main
