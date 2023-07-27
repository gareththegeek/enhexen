import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import ProtectedRoute from '../ProtectedRoute'
import DelvePage from '../pages/DelvePage'
import FactionPage from '../pages/FactionPage'
import HexPage from '../pages/HexPage'
import NpcPage from '../pages/NpcPage'
import SettlementPage from '../pages/SettlementPage'
import NotFoundPage from '../pages/NotFoundPage'

// prettier-ignore
export const routes = [
  { name: 'hexes', route: '/:reference?', component: <HexPage /> },
  { name: 'settlement', route: '/settlements/:reference?', component: <SettlementPage /> },
  { name: 'delve', route: '/delve', component: <DelvePage /> },
  { name: 'factions', route: '/factions/:id?', component: <FactionPage /> },
  { name: 'npc', route: '/npcs/:id', component: <NpcPage /> },
  { name: 'not-found', route: '/not-found', component: <NotFoundPage />},
  { name: 'wildcard', route: '*', component: <NotFoundPage />}
]

const Authenticated = () => (
  <>
    <Header />
    <main className="flex max-w-5xl m-auto">
      <div className="flex flex-col gap-8 w-full mt-16 md:mt-24">
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
    <Footer />
  </>
)

export default Authenticated
