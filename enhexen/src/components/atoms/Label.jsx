import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Label = ({ children, ...rest }) => (
  <span className={mergeClass(rest, "me-4")} {...noClass(rest)}>
    {children}
  </span>
)

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Label
