import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Button = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} className={mergeClass(rest)} {...noClass(rest)}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
