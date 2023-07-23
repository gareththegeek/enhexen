import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import AuthResetPasswordSent from '../pages/AuthPasswordResetSent'
import ConnectPage from '../pages/ConnectPage'

// prettier-ignore
const routes = [
  { name: 'auth', route: '/auth/:authType/:id', component: <AuthPage /> },
  { name: 'auth', route: '/auth/:authType', component: <AuthPage /> },
  { name: 'password-reset-sent', route: '/auth/forgot-password/sent', component: <AuthResetPasswordSent /> },
  { name: 'connect', route: '/connect/:provider', component: <ConnectPage /> },
  { name: 'wildcard', route: '*', component: <Navigate to='/auth/login' />}
]

const Unauthenticated = () => (
  <>
    <main className="flex max-w-[30rem] m-auto">
      <div className="flex flex-col gap-8 w-full mt-48 md:mt-20">
        <Routes>
          {routes.map(({ route, component }) => (
            <Route key={route} path={route} element={component} />
          ))}
        </Routes>
      </div>
    </main>
  </>
)

export default Unauthenticated
