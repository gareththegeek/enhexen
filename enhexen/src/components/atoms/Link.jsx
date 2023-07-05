import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { mergeClass, noClass } from '../mergeClass'

const Link = ({ to, children, ...rest }) => (
  <NavLink to={to} className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </NavLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
