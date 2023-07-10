import PropTypes from 'prop-types'
import IconButton from '../atoms/IconButton'
import H2 from '../atoms/H2'

const ButtonHeading = ({
  heading,
  button,
  handleClick,
  showButton = true,
  children,
}) => (
  <div className="flex gap-4 justify-between">
    <H2>{heading}</H2>
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
