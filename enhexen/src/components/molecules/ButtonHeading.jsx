import PropTypes from 'prop-types'
import IconButton from '../atoms/IconButton'

const ButtonHeading = ({
  heading,
  button,
  handleClick,
  showButton = true,
  children,
}) => (
  <div className="flex gap-4 justify-between">
    <h2>{heading}</h2>
    {showButton && button ? (
      <IconButton onClick={handleClick}>{button}</IconButton>
    ) : (
      children
    )}
  </div>
)

ButtonHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  button: PropTypes.string,
  handleClick: PropTypes.func,
  showButton: PropTypes.bool,
  children: PropTypes.node,
}

export default ButtonHeading
