import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const FieldLabel = ({ htmlFor, children, ...rest }) => (
  <label htmlFor={htmlFor} className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </label>
)

FieldLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default FieldLabel
