import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { SWRConfig } from 'swr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SWRConfig value={{ provider: () => new Map() }}> */}
      <App />
    {/* </SWRConfig> */}
  </React.StrictMode>
)
