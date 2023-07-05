import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Label = ({ htmlFor, children, ...rest }) => (
  <label htmlFor={htmlFor} className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </label>
)

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Label
