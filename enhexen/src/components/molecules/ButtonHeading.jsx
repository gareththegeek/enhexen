import PropTypes from 'prop-types'
import Button from '../atoms/Button'

const ButtonHeading = ({
  heading,
  button,
  handleClick,
  showButton = true,
  children,
  primary = false,
  secondary = false,
}) => (
  <div className="flex gap-4 items-baseline justify-between">
    {heading}
    {showButton && button ? (
      <Button
        primary={primary}
        secondary={secondary}
        onClick={handleClick}
      >
        {button}
      </Button>
    ) : (
      children
    )}
  </div>
)

ButtonHeading.propTypes = {
  heading: PropTypes.node.isRequired,
  button: PropTypes.string,
  handleClick: PropTypes.func,
  showButton: PropTypes.bool,
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
}

export default ButtonHeading
