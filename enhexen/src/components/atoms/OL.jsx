import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const OL = ({ children, ...rest }) => (
  <ol className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </ol>
)

OL.propTypes = {
  children: PropTypes.node,
}

export default OL
