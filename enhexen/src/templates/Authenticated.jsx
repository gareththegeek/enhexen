import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import ProtectedRoute from '../ProtectedRoute'
import DelvePage from '../pages/DelvePage'
import FactionPage from '../pages/FactionPage'
import FactionSelectPage from '../pages/FactionSelectPage'
import HexPage from '../pages/HexPage'
import NpcPage from '../pages/NpcPage'
import SettlementPage from '../pages/SettlementPage'

// prettier-ignore
export const routes = [
  { name: 'hexes', route: '/:reference?', component: <HexPage /> },
  { name: 'settlement', route: '/settlements/:reference?', component: <SettlementPage /> },
  { name: 'delve', route: '/delve', component: <DelvePage /> },
  { name: 'factions', route: '/factions', component: <FactionSelectPage /> },
  { name: 'factions', route: '/factions/:id', component: <FactionPage /> },
  { name: 'npc', route: '/npcs/:id', component: <NpcPage /> },
]

const Authenticated = () => (
  <>
    <Header />
    <main className="flex max-w-[50rem] m-auto">
      <div className="flex flex-col gap-8 w-full mt-48 md:mt-20">
        <Routes>
          {routes.map(({ route, component }) => (
            <Route
              key={route}
              path={route}
              element={<ProtectedRoute>{component}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </div>
    </main>
  </>
)

export default Authenticated
