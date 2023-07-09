import PropTypes from 'prop-types'
import FieldLabel from '../atoms/FieldLabel'
import { mergeClass, noClass } from '../mergeClass'

const Field = ({ name, label, children, ...rest }) => (
  <div
    className={mergeClass(rest, 'flex flex-wrap items-center justify-between')}
    {...noClass(rest)}
  >
    <FieldLabel className="w-24" htmlFor={name}>{label}</FieldLabel>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
