import PropTypes from 'prop-types'

const LI = ({ children }) => <li>{children}</li>

LI.propTypes = {
  children: PropTypes.node,
}

export default LI
