import PropTypes from 'prop-types'

const Placeholder = ({ children }) => <div>{children}</div>

Placeholder.propTypes = {
  children: PropTypes.node.isRequired
}

export default Placeholder
