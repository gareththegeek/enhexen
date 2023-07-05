import PropTypes from 'prop-types'
import Label from '../atoms/Label'

const Field = ({ name, label, children, ...rest }) => (
  <div {...rest}>
    <Label htmlFor={name}>{label}</Label>
    {children}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
