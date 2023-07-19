import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)

  if (!user) {
    const storedUser = localStorage.getItem('auth')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }

  const logout = () => {
    setUser(undefined)
    localStorage.removeItem('auth')
    window.location.replace('/')
  }

  const login = (user, remember) => {
    setUser(user)
    if (remember) {
      localStorage.setItem('auth', JSON.stringify(user))
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}
