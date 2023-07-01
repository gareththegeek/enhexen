import PropTypes from 'prop-types'

const OL = ({ children, ...rest }) => <ol {...rest}>{children}</ol>

OL.propTypes = {
  children: PropTypes.node,
}

export default OL
