import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <Navigate to="/auth/login" replace />
  }
  return <>{children}</>
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute
