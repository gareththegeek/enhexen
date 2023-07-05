import PropTypes from 'prop-types'
import FieldLabel from '../atoms/FieldLabel'

const Field = ({ name, label, children, ...rest }) => (
  <div {...rest}>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
