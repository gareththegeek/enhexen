import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Input = ({ onChange, ...rest }) => (
  <input
    className={mergeClass(rest, 'flex-1')}
    onChange={({ target: { name, value } }) =>
      onChange && onChange({ name, value })
    }
    {...noClass(rest)}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
}

export default Input
