import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const H2 = ({ children, ...rest }) => (
  <h2 className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </h2>
)

H2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H2
