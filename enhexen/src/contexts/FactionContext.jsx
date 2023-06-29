import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const FactionContext = createContext()

export const FactionProvider = ({ children }) => {
  const [id, setId] = useState(undefined)
  return (
    <FactionContext.Provider value={{ id, setId }}>
      {children}
    </FactionContext.Provider>
  )
}

FactionProvider.propTypes = {
  children: PropTypes.node,
}
