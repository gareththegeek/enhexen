import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Table = ({ children, ...rest }) => (
  <table className={mergeClass(rest, 'text-sm md:text-base')} {...noClass(rest)}>
    {children}
  </table>
)

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
