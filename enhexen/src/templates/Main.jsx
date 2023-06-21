import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import Hex from '../pages/Hex'
import Adventure from '../pages/Adventure'

const Main = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Hex />} />
        <Route path="/adventures" element={<Adventure />} />
      </Routes>
    </main>
  </>
)

export default Main
