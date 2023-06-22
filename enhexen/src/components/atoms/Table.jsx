import PropTypes from 'prop-types'

const Table = ({ children }) => <table>{children}</table>

Table.propTypes = {
  children: PropTypes.node
}

export default Table
