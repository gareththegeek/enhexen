import PropTypes from 'prop-types'

const UL = ({ children }) => <ul>{children}</ul>

UL.propTypes = {
  children: PropTypes.node,
}

export default UL
