import PropTypes from 'prop-types'
import Button from './Button'
import { mergeClass, noClass } from '../mergeClass'

const HeadingButton = ({ onClick, children, primary, secondary, ...rest }) => (
  <Button
    className={mergeClass(rest, 'px-4 py-1 -my-1 text-sm')}
    primary={primary}
    secondary={secondary}
    onClick={onClick}
    {...noClass(rest)}
  >
    {children}
  </Button>
)

HeadingButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default HeadingButton
