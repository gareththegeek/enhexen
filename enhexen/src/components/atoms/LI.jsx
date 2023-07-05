import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const LI = ({ children, ...rest }) => (
  <li className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </li>
)

LI.propTypes = {
  children: PropTypes.node,
}

export default LI
