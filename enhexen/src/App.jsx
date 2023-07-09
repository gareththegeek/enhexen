import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './templates/Main'
import Providers from './contexts/Providers'

function App() {
  return (
    <Router>
      <Providers>
        {/* Seemingly unfixable issue - can't scroll to top on navigate
        and scroll bar is too big after navigating to a smaller page
        Everything on this SO failed
        https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6 */}
        <Main />
      </Providers>
    </Router>
  )
}

export default App
