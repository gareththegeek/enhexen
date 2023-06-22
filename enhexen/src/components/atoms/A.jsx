import PropTypes from 'prop-types'

const A = ({ to, children }) => <a href={to} target="_new">{children}</a>

A.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default A
