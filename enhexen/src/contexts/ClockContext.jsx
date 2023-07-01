import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ClockContext = createContext()

export const ClockProvider = ({ children }) => {
  const [now, setNow] = useState(undefined)
  return (
    <ClockContext.Provider value={{ now, setNow }}>
      {children}
    </ClockContext.Provider>
  )
}

ClockProvider.propTypes = {
  children: PropTypes.node,
}
