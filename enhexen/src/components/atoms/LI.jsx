import PropTypes from 'prop-types'

const LI = ({ children, ...rest }) => <li {...rest}>{children}</li>

LI.propTypes = {
  children: PropTypes.node,
}

export default LI
