import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="border-2 border-black">
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
