import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const UL = ({ children, ...rest }) => (
  <ul className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </ul>
)

UL.propTypes = {
  children: PropTypes.node,
}

export default UL
