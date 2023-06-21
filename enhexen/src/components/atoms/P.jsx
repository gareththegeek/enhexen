import PropTypes from 'prop-types'

const P = ({ children }) => <p className="">{children}</p>

P.propTypes = {
  children: PropTypes.node.isRequired,
}

export default P