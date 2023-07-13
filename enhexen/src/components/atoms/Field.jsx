import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Field = ({ name, label, children, width, ...rest }) => (
  <div
    className={mergeClass(rest, 'flex flex-wrap')}
    {...noClass(rest)}
  >
    <label className={width ?? 'w-16'} htmlFor={name}>{label}</label>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
