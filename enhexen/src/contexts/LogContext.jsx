import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const LogContext = createContext()

export const LogProvider = ({ children }) => {
  const [searchText, setSearchText] = useState(undefined)
  return (
    <LogContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </LogContext.Provider>
  )
}

LogProvider.propTypes = {
  children: PropTypes.node,
}
