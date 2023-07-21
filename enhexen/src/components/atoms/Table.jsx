import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Table = ({ children, ...rest }) => (
  <div className={mergeClass(rest, 'z-0 bg-stone-50 rounded')}>
    <table className="w-full" {...noClass(rest)}>
      {children}
    </table>
  </div>
)

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
