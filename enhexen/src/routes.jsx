import AuthPage from './pages/AuthPage'
import ConnectPage from './pages/ConnectPage'
import DelvePage from './pages/DelvePage'
import FactionPage from './pages/FactionPage'
import FactionSelectPage from './pages/FactionSelectPage'
import HexPage from './pages/HexPage'
import NpcPage from './pages/NpcPage'
import SettlementPage from './pages/SettlementPage'

const routes = [
  { name: 'auth', route: '/auth/:authType/:id', component: <AuthPage /> },
  { name: 'auth', route: '/auth/:authType', component: <AuthPage /> },
  { name: 'connect', route: '/connect/:provider', component: <ConnectPage /> },
  { name: 'hexes', route: '/:reference?', component: <HexPage /> },
  {
    name: 'settlement',
    route: '/settlements/:reference?',
    component: <SettlementPage />,
  },
  { name: 'delve', route: '/delve', component: <DelvePage /> },
  { name: 'factions', route: '/factions', component: <FactionSelectPage /> },
  { name: 'factions', route: '/factions/:id', component: <FactionPage /> },
  { name: 'npc', route: '/npcs/:id', component: <NpcPage /> },
]

export default routes
