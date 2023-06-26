import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './templates/Main'
import { HexProvider } from './contexts/HexContext'

function App() {
  return (
    <Router>
      <HexProvider>
        <Main />
      </HexProvider>
    </Router>
  )
}

export default App
