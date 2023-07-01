import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import routes from '../routes'

const Main = () => (
  <>
    <Header />
    <main>
      <Routes>
        {routes.map(({ route, component }) => (
          <Route key={route} path={route} element={component} />
        ))}
      </Routes>
    </main>
  </>
)

export default Main
