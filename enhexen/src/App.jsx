import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Authenticated from './templates/Authenticated'
import Unauthenticated from './templates/Unauthenticated'
import Providers from './contexts/Providers'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

const Template = () => {
  const { user } = useContext(UserContext)

  return user ? <Authenticated /> : <Unauthenticated />
}

function App() {
  return (
    <Router>
      <Providers>
        {/* Seemingly unfixable issue - can't scroll to top on navigate
        and scroll bar is too big after navigating to a smaller page
        Everything on this SO failed
        https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6 */}
        <Template />
      </Providers>
    </Router>
  )
}

export default App
