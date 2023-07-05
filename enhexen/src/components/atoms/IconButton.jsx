import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const IconButton = ({ onClick, children, ...rest }) => (
  <button
    onClick={onClick}
    className={mergeClass(rest, 'px-1 py-0')}
    {...noClass(rest)}
  >
    {children}
  </button>
)

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default IconButton
