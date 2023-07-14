import PropTypes from 'prop-types'
import Button from './Button'
import { mergeClass, noClass } from '../mergeClass'

const IconButton = ({ onClick, children, primary, secondary, ...rest }) => (
  <Button
    className={mergeClass(rest, 'px-1 py-0')}
    primary={primary}
    secondary={secondary}
    onClick={onClick}
    {...noClass(rest)}
  >
    {children}
  </Button>
)

IconButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default IconButton
