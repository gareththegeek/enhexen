import PropTypes from 'prop-types'

const ButtonGroup = ({ children }) => (
  <div className="flex justify-stretch gap-4">{children}</div>
)

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonGroup
