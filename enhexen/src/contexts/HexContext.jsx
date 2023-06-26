import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const HexContext = createContext()

export const HexProvider = ({ children }) => {
  const [reference, setReference] = useState(undefined)
  return (
    <HexContext.Provider value={{ reference, setReference }}>
      {children}
    </HexContext.Provider>
  )
}

HexProvider.propTypes = {
  children: PropTypes.node,
}
