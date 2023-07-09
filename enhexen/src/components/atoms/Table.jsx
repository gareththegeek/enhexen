import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Table = ({ children, heading, ...rest }) => (
  <table
    className={mergeClass(rest, 'text-sm md:text-base')}
    {...noClass(rest)}
  >
    {heading && <caption>{heading}</caption>}
    {children}
  </table>
)

Table.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
}

export default Table
