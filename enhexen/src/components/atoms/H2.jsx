import PropTypes from 'prop-types'

const H2 = ({ children }) => <h2>{children}</h2>

H2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H2
