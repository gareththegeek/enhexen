import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Input = ({ onChange, ...rest }) => (
  <input
    className={mergeClass(rest)}
    onChange={(e) => onChange && onChange(e?.target?.value)}
    {...noClass(rest)}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
}

export default Input
