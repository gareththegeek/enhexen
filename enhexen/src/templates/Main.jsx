import { Routes, Route } from 'react-router-dom'
import Header from '../components/organisms/Header'
import routes from '../routes'

const Main = () => (
  <>
    <Header />
    <main className="flex max-w-[50rem] m-auto">
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

export default Main
