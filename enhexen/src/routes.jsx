import AuthPage from './pages/AuthPage'
import AuthResetPasswordSent from './pages/AuthPasswordResetSent'
import ConnectPage from './pages/ConnectPage'
import DelvePage from './pages/DelvePage'
import FactionPage from './pages/FactionPage'
import FactionSelectPage from './pages/FactionSelectPage'
import HexPage from './pages/HexPage'
import NpcPage from './pages/NpcPage'
import SettlementPage from './pages/SettlementPage'

// prettier-ignore
const routes = [
  { name: 'auth', route: '/auth/:authType/:id', protect: false, component: <AuthPage /> },
  { name: 'auth', route: '/auth/:authType', protect: false, component: <AuthPage /> },
  { name: 'password-reset-sent', route: '/auth/forgot-password/sent', protect: false, component: <AuthResetPasswordSent /> },
  { name: 'connect', route: '/connect/:provider', protect: false, component: <ConnectPage /> },
  { name: 'hexes', route: '/:reference?', protect: true, component: <HexPage /> },
  { name: 'settlement', route: '/settlements/:reference?', protect: true, component: <SettlementPage /> },
  { name: 'delve', route: '/delve', protect: true, component: <DelvePage /> },
  { name: 'factions', route: '/factions', protect: true, component: <FactionSelectPage /> },
  { name: 'factions', route: '/factions/:id', protect: true, component: <FactionPage /> },
  { name: 'npc', route: '/npcs/:id', protect: true, component: <NpcPage /> },
]

export default routes
