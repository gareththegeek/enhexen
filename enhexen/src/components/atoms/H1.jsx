import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const H1 = ({ children, ...rest }) => (
  <h1 className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </h1>
)

H1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H1
