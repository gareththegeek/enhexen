import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './templates/Main'
import Providers from './contexts/Providers'

function App() {
  return (
    <Router>
      <Providers>
        <Main />
      </Providers>
    </Router>
  )
}

export default App
