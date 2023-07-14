import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Field = ({ name, label, children, width, ...rest }) => (
  <div
    className={mergeClass(rest, 'flex flex-wrap')}
    {...noClass(rest)}
  >
    <label className={`${width ?? 'w-20'} text-stone-600 font-normal uppercase`} htmlFor={name}>{label}</label>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
