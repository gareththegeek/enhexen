import PropTypes from 'prop-types'
import IconButton from '../atoms/IconButton'
import H2 from '../atoms/H2'

const ButtonHeading = ({ heading, button, handleClick, showButton = true }) => (
  <div className="flex gap-4 justify-between sm:justify-start mt-2">
    <H2>{heading}</H2>
    {showButton && <IconButton onClick={handleClick}>{button}</IconButton>}
  </div>
)

ButtonHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  showButton: PropTypes.bool,
}

export default ButtonHeading
