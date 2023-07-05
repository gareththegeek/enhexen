import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const P = ({ children, ...rest }) => (
  <p className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </p>
)

P.propTypes = {
  children: PropTypes.node,
}

export default P
