import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Field = ({ name, label, children, ...rest }) => (
  <div
    className={mergeClass(rest, 'flex flex-wrap items-center justify-between')}
    {...noClass(rest)}
  >
    <label className="w-24" htmlFor={name}>{label}</label>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
