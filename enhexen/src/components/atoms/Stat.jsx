import PropTypes from 'prop-types'
import { mergeClass } from '../mergeClass'

const Stat = ({ label, title, children, ...rest }) =>
  children && (
    <div className={mergeClass(rest, 'flex flex-col items-center sm:flex-row')} title={title}>
      <span>{label}</span>
      <span>{children}</span>
    </div>
  )

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Stat
