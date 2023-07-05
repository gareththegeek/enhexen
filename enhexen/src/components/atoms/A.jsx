import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const A = ({ to, children, ...rest }) => (
  <a href={to} target="_new" className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </a>
)

A.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default A
