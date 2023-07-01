import DelvePage from './pages/DelvePage'
import FactionPage from './pages/FactionPage'
import FactionSelectPage from './pages/FactionSelectPage'
import HexPage from './pages/HexPage'

const routes = [
  { name: 'hexes', route: '/:reference?', component: <HexPage /> },
  { name: 'delve', route: '/delve', component: <DelvePage /> },
  { name: 'factions', route: '/factions', component: <FactionSelectPage /> },
  { name: 'factions', route: '/factions/:id', component: <FactionPage /> },
]

export default routes
